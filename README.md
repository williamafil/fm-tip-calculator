# Frontend Mentor - Tip calculator app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](https://i.imgur.com/fEtpQIr.png)

### Links

- Solution URL: [Github Repo](https://github.com/williamafil/fm-tip-calculator)
- Live Site URL: [Online Demo](https://williamafil.github.io/fm-tip-calculator/)

<br/><br/>

## My process

### Setup Project with Vite2

```
$ npm init vite@latest fm-tip-calculator --template react
```

<br/>

### Setting up Tailwind CSS

Follow this tutorial on Tailwind CSS official site: [Install Tailwind CSS with Vue 3 and Vite](https://tailwindcss.com/docs/guides/vue-3-vite#setting-up-tailwind-css)

#### Install Tailwind CSS via npm

```
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

#### Create Config Files

```
$ npx tailwindcss init -p
```

#### Configure Purge ( tree-shake unused styles in production)

```javascript
// tailwind.config.js
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

#### Enable JIT mode

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

#### Include Tailwind in your CSS

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Style Setup

```js
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "hsl(172, 67%, 45%)",
          600: "hsl(183, 100%, 15%)",
          500: "hsl(186, 14%, 43%)",
          400: "hsl(184, 14%, 56%)",
          350: "#9FE8DF",
          300: "hsl(185, 41%, 84%)",
          200: "hsl(189, 41%, 97%)", // #F3F9FA
          50: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        "space-mono": ["Space Mono", "serif"],
      },
      outline: {
        cyan: ["1px solid hsl(172, 67%, 45%)", "1px"],
      },
      ringColor: {
        red: colors.red,
        cyan: colors.cyan,
      },
      ringWidth: {
        DEFAULT: "2px",
        6: "6px",
        10: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<br/><br/>

### Built with

- Vite
- React JS
- Tailwind CSS (JIT)
- Semantic HTML5 markup
- Mobile-first workflow

<br/><br/>

## What I learned
<details>
  <summary>Updating state from child component</summary>
  
  ```js
  // helper function
  resetState = () => {
    return this.setState({ bill: "", tipPercent: "", people: "" });
  };

  // pass helper function to child component as props
  <ResultPanel
    tip={this.getTipAmount()}
    total={this.getTotalAmount()}
    resetState={this.resetState}
  />;
  ```

  ```js
  // Component
  <button
    type="button"
    className="uppercase text-center bg-cyan w-full py-3 rounded text-cyan-600 font-bold text-xl"
    onClick={props.resetState}
  >
    Reset
  </button>
  ```
</details>


<details>
  <summary>Use of Tailwind CSS Peer</summary>

  ```html
  <label>
    <input
      className="hidden peer"
      type="radio"
      value="5"
      name="tip-percent"
      id="five-percent"
    />
    <span
      htmlFor="five-percent"
      className=" tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
    >
      5%
    </span>
  </label>
  ```

  Translate into classic CSS shown as below:

  ```css
  .peer:checked ~ .peer-checked\:bg-cyan {
    background-color: hsl(172, 67%, 45%);
  }
  ```

</details>


<details>
  <summary>Manage state in class component</summary>
</details>

<details>
  <summary>Controlled Form</summary>
</details>

<details>
  <summary>Reset input value with Ref </summary>
</details>

<br/><br/>

## Continued development

Tip percentage buttons and input fields can be wrapped into components to enhance readability and code structure.

<br/><br/>
## Useful resources

- [Sibling selector variants](https://blog.tailwindcss.com/tailwindcss-2-2) - Code sample on Tailwind CSS v2.2 new feature - peer-\*

- [Refs in React JS](https://reactjs.org/docs/refs-and-the-dom.html)

- [Forms](https://reactjs.org/docs/forms.html)

- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper)

## Author

- Website - [William Kang](https://williamafil.github.io/fm-tip-calculator/)
- Frontend Mentor - [@williamafil](https://www.frontendmentor.io/profile/williamafil)

<br/><br/><br/><br/><br/><br/><br/><br/>
