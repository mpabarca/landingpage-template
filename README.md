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

Designed with modularity in mind, components are reusable, maintainable, and easy to extend.

### 🗂️ Key Principles

  - **📏 Separation of Concerns:** Each component handles its own logic, styling, and state management.
  - **♻️ Reusable Elements:** Components are flexible with customizable props, making them adaptable across the app.
  - **🚀 Extensibility:** Easily extend components without altering the core structure.

### 🧪 Component Structure Example

Let's look at a typical component structure and how it integrates with themes, localization, and context management.

#### Example Component: `SampleComponent`

- **Location**: `src/components/SampleComponent.tsx`
- **Purpose**: Demonstrates how a component is structured and organized, with support for themes and localization.

**Component Structure:**

```tsx
// src/components/SampleComponent.tsx
import { useEffect } from 'react';
import { useTheme } from 'next-themes'; // Theme integration
import { getTranslation } from '../localization/getTranslation'; // Localization function
import { LanguageCode, Namespaces } from '../localization/enums'; // Enums for localization

const SampleComponent = () => {
  const { theme, setTheme } = useTheme(); // Theme hook to get and set the current theme
  const [translation, setTranslation] = React.useState({});

  // Fetch localization data when component mounts
  useEffect(() => {
    async function loadTranslations() {
      const data = await getTranslation(LanguageCode.EN, Namespaces.HOME); // Example usage
      setTranslation(data);
    }
    loadTranslations();
  }, []);

  return (
    <div className={`component-container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <h1>{translation.welcome || 'Welcome'}</h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default SampleComponent;
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


