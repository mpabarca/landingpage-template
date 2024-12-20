import { getPageContent } from '@/services/page-service';
import { LanguageCode, Namespaces } from '@/localization/enums';

jest.mock('@/localization', () => ({
  getTranslation: jest.fn(),
}));

describe('getPageContent', () => {
  const mockedGetTranslation = jest.mocked(require('@/localization').getTranslation);

  beforeEach(() => {
    jest.clearAllMocks(); // Clear any mock calls between tests
  });

  it('should fetch translations for specified namespaces', async () => {
    // Mock getTranslation to return fake data
    mockedGetTranslation.mockImplementation(async (locale: LanguageCode, namespace: Namespaces) => ({
      key: `${namespace}-${locale}`,
    }));

    const content = await getPageContent(LanguageCode.en, [Namespaces.HOME, Namespaces.NAVBAR]);

    expect(content).toEqual({
      [Namespaces.HOME]: { key: 'home-en' },
      [Namespaces.NAVBAR]: { key: 'navbar-en' },
    });

    expect(mockedGetTranslation).toHaveBeenCalledTimes(2);
    expect(mockedGetTranslation).toHaveBeenCalledWith(LanguageCode.en, Namespaces.HOME);
    expect(mockedGetTranslation).toHaveBeenCalledWith(LanguageCode.en, Namespaces.NAVBAR);
  });

  it('should return an empty object if no namespaces are provided', async () => {
    const content = await getPageContent(LanguageCode.en, []);

    expect(content).toEqual({});
    expect(mockedGetTranslation).not.toHaveBeenCalled();
  });

  it('should handle errors during translation fetch', async () => {
    mockedGetTranslation.mockRejectedValue(new Error('Translation fetch failed'));

    await expect(
      getPageContent(LanguageCode.en, [Namespaces.HOME])
    ).rejects.toThrow('Translation fetch failed');

    expect(mockedGetTranslation).toHaveBeenCalledTimes(1);
    expect(mockedGetTranslation).toHaveBeenCalledWith(LanguageCode.en, Namespaces.HOME);
  });
  it('should ignore invalid namespaces and fetch only valid ones', async () => {
    mockedGetTranslation.mockImplementation(async (locale: LanguageCode, namespace: Namespaces) => ({
      key: `${namespace}-${locale}`,
    }));

    const content = await getPageContent(LanguageCode.en, [
      Namespaces.HOME,
      'testing' as any, // Invalid namespace
    ]);

    expect(content).toEqual({
      [Namespaces.HOME]: { key: 'home-en' },
    });

    expect(mockedGetTranslation).toHaveBeenCalledTimes(1);
    expect(mockedGetTranslation).toHaveBeenCalledWith(LanguageCode.en, Namespaces.HOME);
  });
});
