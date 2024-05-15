# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot Project](/design/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ryusaem/js-faq-accordion)
- Live Site URL: [Github Live Demo](https://ryusaem.github.io/js-faq-accordion/)

## My process

Later

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

1. I learn an efficient way to hide any content without them taking any place which is the "display: hide".
   We use it to hide all the answers, and we choose to display them only if the user is actively clicking on the "+" icons.
   I also think there is another way to hide stuff but they are going to take place "visibility:hidden;"

```css
.faq-item .answers {
  display: none;
}
```

--

2.  We used a lot of flexbox tool in this project.
    One for the title + icon (stars).
    One for the question + icon ("+" or "-").
    Using flex save me so much time from aligning things in a manual way, and it is so much more efficient.
    I was wondering how to achieve a result where I could display the "question on multiple line" and having the icon "+" or "-" at the extreme left. The result I had iniatially displayed the "question" on multiple line, but the icon "+" or "-" was not at the extrem "left". So I add a new box container that took both the "question" and the "icon" and it work beautifully without any kind of work.

--

3. To find a way to know when a user is going to touch the icon "+" or "-", I decided to target all icons by class "document.querySelectorAll(".icon")" and loop over each icons to add an event listener. In the event listener, if a user click on the icon, then we will change the "src" of the icon to change the "+" to a "-". We can achieve that using the ternary operator, which for me is very eleguant. In the ternary I said that if the icon src include "plus" then it had to switch to the "-" icon .... vice versa ...
   And then we just had to display the block of answers, which was possible by targeting the index of the answers. This one I got lucky because I just wanted a way to target it, and I find it without really thinking...due the amount of hours I did spend training on JS...Thank you training.

```js
const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answers");

icons.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active"); // We use the active class to increase the size of the icon

    icon.src = icon.src.includes("plus")
      ? "/assets/images/icon-minus.svg"
      : "/assets/images/icon-plus.svg";

    answers[i].classList.toggle("active"); // We use the index to target the correct answer
  });
});
```

--

4. By using "flex-wrap: wrap;" we managed to display the "asnwer" at the bottom of both the "questions" and the "icons". This is exactly the result we wanted, because otherwise it did it crumble. I have to say I was a bit lucky on that found, because I had to try a lot of different result to get it right, and I'm happy with it.

![without flex-wrap](/assets/images/without-flex-wrap.png)
![with flex-wrap](/assets/images/with-flex-wrap.png)

```css
.faq-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
```

5. "box-shadow" is also a fascinating property that allow us to add a shadow effect on our box. Learning all of the different property it have is not necessary, but always great to know and understand.

```css
box-shadow: none|horizontal-offset vertical-offset blur spread color
  |inset|initial|inherit;
```

6. "tabindex" is an html attribute that allow us to use keyboard on element (like <div>).
   Naturally the <div> and <span> does not allow us to focus keyboard on them, so we need to use JS to add the attribute "tabindex" to each questions.
   In our case, we need to use the keyboard to "Up" and "Down" to hide or reveal the question.
   To know if the user is pressing either "Up" or "down", we could listen to each event occuring when we press a "key" when we focus the "question" area. The event that interest us is "e.key" and the values are "ArrowDown" & "ArrowUp".
   I didn't wanted to implement that function, but I did it eventually because I wanted to test my boudaries and know if I could achieve such feature even though I didn't train on it ... and it was a success.

```js
question.setAttribute("tabindex", 0); // We add a tabindex to make the question clickable (for accessibility purposes
```

```js
question.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
  }
});
```

7. Give us the ability to focus on element each time the mouse is hovering so when we hover to a box, this little event listener is going to use a blue border box to highligh the item.

```js
question.addEventListener("mouseenter", () => {
  question.focus();
});
```

8. Each browser style when we use the "mouseenter" as an even with "question.focus"...The style is a blue border each time we hover to a new item. To remove it we have to use the pseudo class ":focus" and use the "outline" property as "none".

```css
.questions:focus {
  outline: none; /* Custom color */
}
```

### Continued development

- Training more on animation (e.g: transform, transition).

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz/hub) - Formidable resources to make you learn by "doing" awesome project. Highly recommend it. This is the link to the project HUB concernint that project.

## Author

- Github - [@Ryusaem](https://github.com/Ryusaem)
- Linkedin - [@sambath-meas](https://www.linkedin.com/in/sambath-meas)
- Coursera - [@sambath-meas](https://www.coursera.org/learner/sambath-meas)
- Twitter - [@RyuBraveheart](https://twitter.com/RyuBraveheart)
- Frontend Mentor - [@Ryusaem](https://www.frontendmentor.io/profile/Ryusaem)
- CodeWars - [@Ryusaem](https://www.codewars.com/users/Ryusaem)
