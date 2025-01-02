# React App with Vite

This is a React project bootstrapped with [Vite](https://vitejs.dev/). The app is built with [Ant Design (antd)](https://ant.design/) for UI components, and it is configured with Prettier for code formatting and Vite alias paths for cleaner imports. Additionally, `jsconfig.json` is set up to enable IntelliSense for path aliases in your editor. This language also supports multiple languages (English, Tamil and Hindi)

## Getting Started

### Prerequisites

- Node.js (>= 20.0.0)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

> Note: The app will be available at `http://localhost:5173` by default.

### Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

The optimized files will be output to the `dist` folder.

### Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
# or
yarn preview
```

## Configuration

### Prettier

Prettier is configured in `.prettierrc` for code formatting. To format code manually, use:

```bash
npm run format
# or
yarn format
```

You can also set up your editor to automatically format code on save.

### Vite Alias Paths

Path aliases are configured in `vite.config.js` and `jsconfig.json`. By default, the following alias is set:

```js
{
  '@src': './src'
  '@views': './src/views'
  '@pages': './src/views/pages'
  '@comps': './src/views/components'
  '@service': './src/service'
  '@routes': './src/routes/routes.library.js'
  '@hooks': './src/lib/hooks'
  '@assets': './src/assets'
  '@context': './src/context-api'
}
```

This allows you to import files like so:

```js
import Component from '@comps/Component'
```

#### Updating Aliases

To add or modify aliases, update both:

- `resolve.alias` in `vite.config.js`
- `compilerOptions.paths` in `jsconfig.json`

## Using Ant Design

Ant Design is integrated into the project for a seamless UI experience. To use Ant Design components:

1. Import the required components in your file:

   ```jsx
   import { Button } from 'antd'
   ```

2. Include the Ant Design styles in your app. The styles are pre-configured in the entry point (`main.jsx`):

   ```jsx
   import 'antd/dist/reset.css'
   ```

3. Start using Ant Design components:
   ```jsx
   const App = () => <Button type="primary">Click Me</Button>
   export default App
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run format`: Format code using Prettier.
- `npm run lint`: Lint code. (optional flag --fix can be passed to fix auto fixable lint issues.)

## File Structure

```
project-root/
├── src/
│   ├── assets/               # Static assets
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   ├── context-api/          # React Context API
│   ├── hooks/                # Custom hooks
│   ├── i18n/                 # Locale for multi language
│   ├── routes/               # Routes configs and static route definitions
│   ├── service/              # All api calls are made from the files inside the folder
│   │   ├── utils             # Axios instance, api base service layer and api constants
│   ├── styles/               # Global styles and mixins
│   ├── views/                # The rendering items
│   │   ├── components        # Global Components
│   │   ├── layouts
│   │   ├── pages
│   ├── App.jsx               # Root component
│   ├── App.scss
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── .prettierrc               # Prettier configuration
├── eslint.config.js          # Lint Definitions
├── jsconfig.json             # Path aliases for IntelliSense
├── vite.config.js            # Vite configuration
└── package.json              # Project metadata and dependencies
```

## License

This project is licensed under the [MIT License](LICENSE).
