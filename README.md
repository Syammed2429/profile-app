# Starter Base

A comprehensive React Native Expo app template with modern navigation, UI components, and development workflow tools. Built with TypeScript, NativeWind v4, and Expo Router.

## Features

### Core Technologies

- **Expo Router** with tab-based navigation and dynamic routes
- **NativeWind v4** for Tailwind CSS styling
- **TypeScript** with strict type checking
- **React Native Reusables** component library

### UI & Theming

- Dark and light mode support
  - Android Navigation Bar matches theme
  - Persistent theme preference
- Common UI components
  - ThemeToggle, Avatar, Button, Card, Progress, Text, Tooltip, Switch
- Global header icons across all tab screens
  - Bell (notifications)
  - Message (chat)
  - Settings
  - Theme toggle

### Development Workflow

- **ESLint** with modern flat config (`eslint.config.js`)
- **Husky** pre-commit hooks
- **TypeScript** strict mode
- Automated code quality checks

## Navigation Structure

The app uses Expo Router's recommended tab-based navigation structure:

```
app/
├── _layout.tsx              # Root layout with theme provider
├── (tabs)/                  # Tab navigator group
│   ├── _layout.tsx         # Tab layout with global header icons
│   ├── index.tsx           # Home tab
│   └── about.tsx           # About tab
├── requests/
│   └── [id].tsx            # Dynamic route for request details
└── services/
    └── [id].tsx            # Dynamic route for service details
```

### Tab Navigation

- **Home Tab** (`/`): Main application screen
- **About Tab** (`/about`): Information and settings

### Dynamic Routes

- **Request Details** (`/requests/[id]`): View specific request details
- **Service Details** (`/services/[id]`): View specific service details

### Header Configuration

All tab screens include global header icons:

- Bell icon (notifications)
- Message icon (chat)
- Settings icon
- Theme toggle

Detail screens have custom headers with:

- No back button (for services)
- Safe area handling
- No header shadows/borders

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Expo CLI

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd test-all

# Install dependencies (this will automatically set up Git hooks)
pnpm install

# Start development server
pnpm start
```

> **🔒 Important**: The `pnpm install` command automatically sets up Husky Git hooks for pre-commit and pre-push protection. This ensures code quality and prevents direct pushes to protected branches.

### Git Hooks Auto-Setup

This project automatically configures Git hooks when you run `pnpm install`. The setup includes:

**Pre-commit Protection:**
- TypeScript type checking (`pnpm type-check`)
- ESLint error checking (no warnings/errors allowed)
- Automatic rejection of commits with issues

**Pre-push Protection:**
- Email-based permission system for protected branches
- Protected branches: `main`, `master`, `develop`, `test`
- Automatic rejection of unauthorized pushes

**Verification:** After installation, you can verify the hooks are working:
```bash
# Check if hooks are installed and working
pnpm check-hooks

# Test pre-commit hook (should run automatically on commit)
git add .
git commit -m "test commit"
```

**If hooks aren't working after cloning:**
```bash
# Manual setup (shouldn't be needed)
git config core.hooksPath .husky
chmod +x .husky/*

# Or use the verification script for diagnosis
pnpm check-hooks
```

### Available Scripts

```bash
# Development
pnpm start          # Start Expo development server
pnpm android        # Run on Android device/emulator
pnpm ios            # Run on iOS device/simulator
pnpm web            # Run in web browser

# Code Quality
pnpm lint           # Run ESLint
pnpm lint:fix       # Fix auto-fixable ESLint issues
pnpm type-check     # Run TypeScript type checking
pnpm check-hooks    # Verify Husky Git hooks setup

# Testing & Building
pnpm test           # Run tests (if configured)
pnpm build          # Create production build
```

## Code Quality & Git Workflow

### Pre-commit Hooks

The project uses Husky to enforce code quality before commits:

- **TypeScript**: No type errors allowed
- **ESLint**: No errors or warnings allowed (`--max-warnings 0`)

### Fixing Commit Blocks

If your commit is blocked by the pre-commit hook:

1. **Fix TypeScript errors:**

   ```bash
   pnpm type-check
   # Fix any reported type errors
   ```

2. **Fix ESLint issues:**

   ```bash
   pnpm lint
   # Review and fix any errors/warnings

   # Auto-fix what's possible
   pnpm lint:fix
   ```

3. **Commit again:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

### ESLint Configuration

The project uses the modern ESLint flat config format (`eslint.config.js`) with:

- TypeScript support
- React Native specific rules
- Expo Router conventions
- Automatic ignoring of generated files (`.expo/`, `node_modules/`, etc.)

## Project Structure

```
├── app/                     # Expo Router app directory
├── assets/                  # Static assets (images, fonts)
├── components/              # Reusable UI components
│   ├── ui/                 # Base UI components
│   └── enhanced-switch-example.tsx
├── lib/                     # Utility functions and hooks
│   ├── icons/              # Icon components
│   ├── constants.ts        # App constants
│   ├── useColorScheme.tsx  # Theme hook
│   └── utils.ts            # Helper utilities
├── .husky/                  # Git hooks
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Adding New Tab Screens

1. Create a new file in `app/(tabs)/`
2. Export a React component
3. The tab will automatically appear in the tab navigator

### Adding New Dynamic Routes

1. Create a folder in `app/` (e.g., `products/`)
2. Add `[id].tsx` for dynamic routes
3. Access params with `useLocalSearchParams()`

### Customizing Header Icons

Edit the `headerRight` configuration in `app/(tabs)/_layout.tsx`:

```typescript
headerRight: () => (
  <View className="flex-row items-center gap-4 pr-4">
    {/* Add your custom icons here */}
  </View>
),
```

### Theme Customization

- Modify colors in `tailwind.config.js`
- Update theme logic in `lib/useColorScheme.tsx`
- Customize components in `components/ui/`

## Troubleshooting

### Common Issues

1. **Pre-commit hook fails**: Run `pnpm lint:fix` and `pnpm type-check` to identify and fix issues

2. **Navigation not working**: Ensure you're using Expo Router's file-based routing correctly

3. **Theme not persisting**: Check that `lib/useColorScheme.tsx` is properly configured

4. **Header icons not showing**: Verify the icons are imported and the headerRight is configured in the tab layout

### Getting Help

- Check the [Expo Router documentation](https://expo.github.io/router/)
- Review [NativeWind documentation](https://www.nativewind.dev/)
- See [React Native Reusables](https://github.com/mrzachnugent/react-native-reusables) for component usage
