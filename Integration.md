# ReAD Framework - External Project Integration Methods

Below are four production-ready methods to integrate the ReAD Framework into external projects, provided in pure Markdown format for direct copy-paste usage.

------

## Method 1: Local Package Installation (Development/Private Use)

**Use Case**: Test the framework in private projects or pre-publication testing without npm registry.

### Step 1: Package the ReAD Framework

```bash
# Navigate to ReAD Framework root directory
cd /path/to/ReAD

# Install dependencies (if missing)
npm install

# Build production bundle
npm run build

# Create local package archive
npm pack
# Output: Generates "ReAD-1.0.0.tgz" (version matches package.json)
```

### Step 2: Install Local Package in Target Project

```bash
# Navigate to your target React project
cd /path/to/your-target-project

# Install local ReAD package (use absolute or relative path)
npm install /path/to/ReAD-1.0.0.tgz
# OR relative path example: npm install ../ReAD/ReAD-1.0.0.tgz
```

### Step 3: Install Peer Dependencies

```bash
# Install required peer dependencies
npm install react@>=18.0.0 react-dom@>=18.0.0 lucide-react@>=0.268.0
npm install -D tailwindcss@3 postcss autoprefixer
```

### Step 4: Configure TailwindCSS in Target Project

Create/Update `tailwind.config.js` (project root):

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ReAD/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Import and Use the Framework

```jsx
// src/components/AdsSection.jsx
import React from 'react';
import ReADFramework from 'ReAD';

const AdsSection = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Featured Advertisements</h2>
      <ReADFramework />
    </div>
  );
};

export default AdsSection;
```

------

## Method 2: npm Publication & Installation (Public/Team Sharing)

**Use Case**: Distribute across teams or make publicly available via npm registry.

### Step 1: Prepare Framework for npm Publication

Update `package.json` (ReAD Framework root):

```json
{
  "name": "ReAD",
  "version": "1.0.0",
  "description": "Modern React advertisement framework with dual layouts and animations",
  "main": "dist/ReADFramework.umd.js",
  "module": "dist/ReADFramework.es.js",
  "types": "dist/ReADFramework.d.ts",
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0",
    "lucide-react": ">=0.268.0",
    "tailwindcss": ">=3.0.0"
  },
  "keywords": ["react", "ad-framework", "advertisement", "tailwindcss", "animation"],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/ReAD.git"
  }
}
```

Build production bundle:

```bash
npm run build
```

### Step 2: Publish to npm Registry

```bash
# Login to npm (use --scope for private packages)
npm login

# Publish public package (remove --access public for private)
npm publish --access public

# Verify publication (optional)
npm info ReAD
```

### Step 3: Install in Target Project

```bash
# Install from npm registry
npm install ReAD

# Install peer dependencies
npm install lucide-react
npm install -D tailwindcss@3 postcss autoprefixer
```

### Step 4: Configure TailwindCSS

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ReAD/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Implement the Framework

```jsx
// src/App.jsx
import React from 'react';
import ReADFramework from 'ReAD';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="py-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center text-gray-900">My Application</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <ReADFramework />
      </main>
    </div>
  );
}

export default App;
```

------

## Method 3: Git Submodule Integration (Unpublished/Shared Codebases)

**Use Case**: Maintain sync between framework and multiple projects (team collaboration).

### Step 1: Add Submodule to Target Project

```bash
# Navigate to target project root
cd /path/to/your-target-project

# Initialize Git (if not already a repo)
git init

# Add ReAD Framework as submodule
git submodule add https://github.com/your-username/ReAD.git src/libs/ReAD
```

### Step 2: Install Dependencies

```bash
# Install framework dependencies
cd src/libs/ReAD
npm install

# Return to target project root
cd ../../..

# Install target project dependencies
npm install
npm install -D tailwindcss@3 postcss autoprefixer
```

### Step 3: Update Submodule (When Framework Changes)

```bash
# Pull latest changes from framework repo
cd src/libs/ReAD
git pull origin main

# Commit submodule update in target project
cd ../../..
git add src/libs/ReAD
git commit -m "Update ReAD Framework to latest version"
```

### Step 4: Configure TailwindCSS

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/libs/ReAD/src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Import and Use

```jsx
// src/components/AdvertisingSection.jsx
import React from 'react';
import ReADFramework from '../libs/ReAD/src/ReADFramework';

const AdvertisingSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ReADFramework />
      </div>
    </section>
  );
};

export default AdvertisingSection;
```

------

## Method 4: UMD Bundle & CDN Integration (Non-React/Quick Prototyping)

**Use Case**: Static HTML pages, non-React projects, or rapid prototyping.

### Step 1: Configure Vite for UMD Build

Update `vite.config.js` (ReAD Framework root):

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ReADFramework.jsx'),
      name: 'ReADFramework',
      fileName: (format) => `ReAD.${format}.js`,
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucideReact',
        },
      },
    },
  },
});
```

### Step 2: Build UMD Bundle

```bash
# In ReAD Framework root directory
npm run build
# Output: dist/ReAD.umd.js
```

### Step 3: Host the Bundle

- Upload `dist/ReAD.umd.js` to your CDN (e.g., Netlify, AWS S3, or local `public/` folder)

### Step 4: Integrate into HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReAD Framework CDN Integration</title>
  
  <!-- Dependencies via CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/lucide-react@0.268.0/dist/umd/lucide-react.min.js"></script>
  
  <!-- TailwindCSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- ReAD Framework UMD Bundle -->
  <script src="https://your-cdn-url.com/ReAD.umd.js"></script>
</head>
<body class="bg-gray-50">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-900">Advertisement Section</h1>
    <div id="ad-container"></div>
  </div>

  <script>
    // Initialize ReAD Framework
    const container = document.getElementById('ad-container');
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(ReADFramework));
  </script>
</body>
</html>
```

### Step 5: Customization Example (Optional)

```html
<script>
  // Custom ad data (requires framework modification to accept props)
  const customAds = [
    {
      id: 10,
      title: "Custom CDN Ad",
      description: "Promoted content via CDN",
      category: "Technology",
      image: "https://picsum.photos/800/600",
      link: "#",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  // Render with custom props
  root.render(React.createElement(ReADFramework, { ads: customAds }));
</script>
```