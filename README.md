# 🌐 Localization Dark Mode Shadcn

A reusable and scalable white-label template for landing pages and personal/portfolio sites with dynamic localization and dark mode support.

## 📝 Project Overview

This project provides a robust template supporting localization, dark mode toggling, and a modular component structure for easy customization.

### 🔑 Key Features

- **🌍 Localization**: Dynamic language support using enums (`LanguageCode`, `Namespaces`) and translation files.
- **🌙 Dark Mode**: Integrated with `next-themes` for seamless dark/light mode toggling.
- **🧩 Component Structure**: Modular components designed for sections like Home, About, Blog, and more.
- **📦 Dynamic Content Loading**: Fetches locale-specific data using `getTranslation`.

## 📁 Code Structure

### 📂 Directory Overview

- **`public/`**: Contains public assets like images and static files.
- **`src/`**: Main application code, including components and pages.

### 📌 Key Files

- **`components.json`**: Manages component configuration.
- **`next.config.mjs`**: Next.js configuration settings.
- **`tailwind.config.ts`**: Tailwind CSS configuration.
- **`tsconfig.json`**: TypeScript configuration.

## 🚀 Getting Started

Set up the development environment:

```bash
npm install
npm run dev
```
Visit http://localhost:3000 to view the application in your browser.

## 🌍 Localization

Localization is managed using enums for `LanguageCode` and `Namespaces`, with translation files dynamically imported based on the language, ensuring efficient and organized localization.

### 🛠️ Implementation Steps

1. **Enums Setup:** Define `LanguageCode` and `Namespaces` enums to standardize language codes and translation namespaces.

   - **📍 Location:**: `src/localization/enums.ts`

```typescript
 // src/localization/enums.ts
 export enum LanguageCode {
   EN = 'en',
   ES = 'es',
   // Add other languages as needed
 }

 export enum Namespaces {
   COMMON = 'common',
   HOME = 'home',
   ABOUT = 'about',
   // Add other namespaces as needed
 }
```

2. **Translation Files:** Organize translation files by language and namespace.
   
    - **📍 Location:** `public/locales/{language}/{namespace}.json`
    - **🔍 Details:** Each language has its own directory, and each namespace corresponds to a JSON file that contains the localized strings for that section. For example, `public/locales/en/home.json` would contain translations for the home page in English.

```typescript
// Example: public/locales/en/home.json
{
  "welcome": "Welcome to the Home Page",
  "description": "This is a localized description."
}
```

**❗️ Important Reminder ❗️** 
Ensure `LanguageCode` and `Namespaces` match the folder and file names in `public/locales`. Any mismatch will cause missing translations or errors.
For example, if your **LanguageCode** is `EN = 'en'` and the **Namespace** is `HOME = 'home'`, the file should be located at `public/locales/en/home.json`. Any mismatch will result in missing translations and potential runtime errors.

3. **Dynamic Import:** Use the `getTranslation` to load translation files dynamically.
   
    - **📍 Location:** `src/localization/getTranslation.ts`

```typescript
// src/localization/getTranslation.ts
import { LanguageCode, Namespaces } from './enums';

export async function getTranslation(language: LanguageCode, namespace: Namespaces) {
  try {
    const translations = await import(`../../public/locales/${language}/${namespace}.json`);
    return translations.default;
  } catch (error) {
    console.error('Error loading translation:', error);
    return {};
  }
}
```
This setup ensures that localization is efficient, organized, and easily extendable for adding new languages or expanding existing ones.


## 🌙 Dark Mode
The project uses `next-themes` for efficient dark/light mode toggling.

### 🛠️ Implementation Steps:
  - **🌓 Theme Provider:** Wrap the main app in a ThemeProvider from next-themes.
  - **🔄 Toggle Mechanism:** Use the useTheme hook to toggle between themes.
  - **🎨 Styling:** Utilize Tailwind's dark mode utilities to adjust styles based on the theme.


## 🧩 Component Structure and Modularity

Designed with modularity in mind, components are reusable, maintainable, and easy to extend. Each section of the site, such as Home, Navbar or Footer, is structured as a standalone component that receives its data from the server, ensuring fast and efficient rendering.

### 🗂️ Key Principles

  - **📏 Separation of Concerns:** Each component handles its own logic, styling, and state management where necessary. This keeps components focused, modular, and easier to debug or extend.
  - **♻️ Reusable Elements:** Components are designed with customizable props and minimal hard-coded values to ensure they can be reused across different parts of the application, reducing redundancy.
  - **🚀 Extensibility:** Components can be easily extended with new functionality without altering their core structure, making the codebase scalable and adaptable to new requirements.

### 🧪 How Modules Work with Localization and Content Fetching

Let's look at a typical component structure and how it integrates with themes, localization, and context management. Where content is fetched server-side and passed to the modules, improving performance and reducing the need for client-side fetching.

#### Content Fetching Approach
A centralized function `getPageContent` in `src/services/page-service.ts` fetches translations and other page-specific content based on the given locale and an array of namespaces. This approach ensures that all necessary data is loaded before the page is rendered.

```ts
// src/services/page-service.ts
export async function getPageContent(
  locale: LanguageCode,
  namespaces: Namespaces[]
): Promise<PageContent> {
  const content: PageContent = {};

  // Fetch translations for each namespace
  await Promise.all(
    namespaces.map(async (namespace) => {
      content[namespace] = await getTranslation(locale, namespace);
    })
  );

  return content;
}
```

#### Page-Level Content Management
 In the page component, `getPageContent` is used to fetch the necessary content for all modules. The fetched content is then passed as props to the server-side components, allowing them to render without the need for useEffect or use client.

```tsx
// src/app/[lang]/page.tsx
const Page = async () => {
  const context: ISiteContext = getSiteContext();
  const locale = context.locale as LanguageCode;

  // Fetch content for required modules
  const content = await getPageContent(locale, [
    Namespaces.NAVBAR,
    Namespaces.HOME,
    {...}
  ]);

  return (
    <div>
      <Navbar context={context} content={content[Namespaces.NAVBAR]} />
      <main>
        <section id="home">
          <HomeModule content={content[Namespaces.HOME]} />
        </section>
        {...}
      </main>
    </div>
  );
};
```

#### How Module Component Works:
- **Server-Side Rendering:** Modules are rendered on the server and receive their localized content and data directly via props, eliminating the need for useEffect or other client-side fetching techniques.

- **Structured Data Definitions:** Each module should define its own interface for the data it needs `I{module-name}Data` and ensure that these data structures align with the localization files located in `src/localization/{LanguageCode}/{Namespaces.[module-name]}`. This interface should be used consistently with the corresponding localization files.

- **Module Props Interface:** Define a `{module-name}ModuleProps` interface that outlines the props each module will accept. This keeps the component API clean and ensures type safety.


Example `src/modules/Home.tsx`:
```tsx
export interface IHomeData {
  title: string;
  welcomeMessage: string;
  intro: string;
}

interface HomeModuleProps {
  context: ISiteContext;
  content: INavbarData;
}

const HomeModule = ({ context, content }: HomeModuleProps) => {
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.welcomeMessage}</p>
      <p>{content.intro}</p>
    </section>
  );
};

export default HomeModule;
```

### 📚 Guidelines for Component Development

  - **📝 Naming Conventions:** Use clear names based on functionality (e.g., Home, ContactForm).
  - **🌓 Theme Integration:** Use the useTheme hook for theme toggling.
  - **🌍 Localization:** Use getTranslation for fetching localized content.
  - **🧩 Modularity:** Keep components self-contained, using context providers for shared state if needed.
  - **📂 Organization:** Place components in src/components/. Create subdirectories for related elements as needed.

This structure ensures components are easy to use, extend, and maintain as the project grows.

## 📜 License
This project is licensed under the [MIT License](https://mit-license.org/).


