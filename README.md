# Frontend Mentor - Newsletter sign-up form with success message solution <!-- omit in toc -->

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents <!-- omit in toc -->

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![preview](./design/desktop-design.jpg)

### Links

- Live Site URL: [cristianchitiva.dev](https://cristianchitiva.dev/newsletter-sign-up/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript event listeners

### What I learned

I learned how to add an action or function to the `submit` event. Also, I had not worked with position relative and absolute, so I learned how to use them.

```js
document.querySelector("<selector>").addEventListener("submit", (event) => ...
```

```css
position: relative;
position: absolute;
height: 0; /* To prevent the element from taking up space */
```

Furthermore, I used https://caninclude.glitch.me/ for checking if it is semantically correct to nest an element inside another.

```html
<article>
	<button>It is semantically correct</button>
</article>
```

### Continued development

I would like to learn more css tricks and make html semantically correct. I would also like to learn frameworks like tailwind or bootstrap.

### Useful resources

- [Can Include](https://caninclude.glitch.me/) - This helped me to check if it is semantically correct to nest an element inside another.
