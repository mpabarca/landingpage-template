import { getSiteContext } from '@/lib/general-utils';
import { LanguageCode } from '@/localization/enums';
import { CustomHeaders } from '@/enums';
import { DEFAULT_LOCALE } from '@/localization/constants';

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}));

describe('getSiteContext', () => {
  const mockHeaders = (headersData: Record<string, string | undefined>) => {
    jest.mocked(require('next/headers').headers).mockReturnValue({
      get: jest.fn((key: string) => headersData[key] || null),
    });
  };

  it('should return default context when no headers are provided', async () => {
    mockHeaders({});

    const context = await getSiteContext();

    expect(context).toEqual({
      locale: DEFAULT_LOCALE,
      pathname: '',
      hasMultipleLocales: false,
    });
  });

  it('should return correct context based on provided headers', async () => {
    mockHeaders({
      [CustomHeaders.Locale]: LanguageCode.es,
      [CustomHeaders.Pathname]: '/about',
      [CustomHeaders.HasMultipleLocales]: 'yes',
    });

    const context = await getSiteContext();

    expect(context).toEqual({
      locale: LanguageCode.es,
      pathname: '/about',
      hasMultipleLocales: true,
    });
  });

  it('should fall back to defaults if the language provided is not supported', async () => {
    mockHeaders({
      [CustomHeaders.Locale]: 'pl',
      [CustomHeaders.Pathname]: '/about',
      [CustomHeaders.HasMultipleLocales]: 'yes',
    });

    const context = await getSiteContext();

    expect(context).toEqual({
      locale: DEFAULT_LOCALE,
      pathname: '/about',
      hasMultipleLocales: true,
    });
  });

  it('should fall back to defaults if some headers are missing', async () => {
    mockHeaders({
      [CustomHeaders.Pathname]: '/contact',
    });

    const context = await getSiteContext();

    expect(context).toEqual({
      locale: DEFAULT_LOCALE,
      pathname: '/contact',
      hasMultipleLocales: false,
    });
  });

  it('should handle invalid hasMultipleLocales value gracefully', async () => {
    mockHeaders({
      [CustomHeaders.HasMultipleLocales]: 'invalid_value',
    });

    const context = await getSiteContext();

    expect(context).toEqual({
      locale: LanguageCode.en,
      pathname: '',
      hasMultipleLocales: false,
    });
  });
});