# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - November/December 2024

### Added
- Added CHANGELOG.md file (2024-12-18)
- Upgraded React to v19 and dependencies (2024-12-17)
- Upgraded Next.js to v15 and React to stable version 18.3 (2024-11-19)

### Changed
- Changed components.json to use @/lib/client-utils (2024-11-19)

## [1.0.0] - September 2024

### Added
- Navigation Bar Module (2024-09-18/19)
  - Implemented responsive design with Desktop and Mobile variants
  - Added dynamic content section responsiveness
  - Created dynamic navigation based on navigationModules
  - Integrated dynamic size handling
  - Added SocialMediaLinks component

### Changed
- Project Structure Updates (2024-09-17)
  - Moved section tag element from page to each module
  - Implemented server-side content fetching for modules
  - Added Loading UI for language pages
  - Relocated DisplayModeToggle and LanguageToggle to Navbar module
- Updated package.json configurations (2024-09-19)

### Refactored
- Component Renaming (2024-09-16/18)
  - Renamed ModeToggle to DisplayModeToggle
  - Changed Sidebar module to Navbar
  - Updated localization text structure

## [0.2.0] - August 2024

### Added
- Language Toggle Feature (2024-08-24)
  - Created locale-based language switching
  - Added .nvmrc file for Node version management

### Changed
- Project Structure Refactor (2024-08-22)
  - Implemented new dynamic localization system
  - Created main website modules
  - Added localization data for future modules

## [0.1.0] - July 2024

### Added
- Initial Project Setup (2024-07-07)
  - Basic project configuration
  - Installed and configured shadcn/ui

- Dark Mode Implementation (2024-07-07)
  - Added theme provider
  - Created ModeToggle component
  - Integrated dark mode support

- Localization System (2024-07-14)
  - Implemented basic localization logic
  - Added multi-language support structure

### Changed
- Project naming and initial configuration (2024-07-08)

[Unreleased]: https://github.com/username/repository/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/username/repository/releases/tag/v1.0.0
[0.2.0]: https://github.com/username/repository/releases/tag/v0.2.0
[0.1.0]: https://github.com/username/repository/releases/tag/v0.1.0
