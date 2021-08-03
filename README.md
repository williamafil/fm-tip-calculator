# Frontend Mentor Tip Calculator

## Setup Project with Vite2

```
$ npm init vite@latest fm-tip-calculator --template react
```

<br/><br/>

## Setting up Tailwind CSS

Follow this tutorial on Tailwind CSS official site: [Install Tailwind CSS with Vue 3 and Vite](https://tailwindcss.com/docs/guides/vue-3-vite#setting-up-tailwind-css)

### Install Tailwind CSS via npm

```
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Create Config Files

```
$ npx tailwindcss init -p
```

### Configure Purge ( tree-shake unused styles in production)

```javascript
// tailwind.config.js
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

### Enable JIT mode

[Reference](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode)

```javascript
module.exports = {
  mode: "jit", // add this line
  purge: [
    // ...
  ],
  theme: {
    // ...
  },
  // ...
};
```

### Include Tailwind in your CSS

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
