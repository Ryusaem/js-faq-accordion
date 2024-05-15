const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answers");
const questions = document.querySelectorAll(".questions");
const box = document.querySelectorAll(".box");

// When we click on the box, we toggle the active class on the icon and the answer
box.forEach((b, i) => {
  b.addEventListener("click", () => {
    icons[i].classList.toggle("active");

    icons[i].src = icons[i].src.includes("plus")
      ? "/assets/images/icon-minus.svg"
      : "/assets/images/icon-plus.svg";

    answers[i].classList.toggle("active"); // We use the index to target the correct answer
  });
});

// When we hover over the question, we add the focus event to make it focusable
questions.forEach((question, i) => {
  question.setAttribute("tabindex", 0); // We add a tabindex to make the question clickable (for accessibility purposes

  // We add the focus event to make the question focusable
  question.addEventListener("mouseenter", () => {
    question.focus();
  });

  question.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      icons[i].src = icons[i].src.includes("plus")
        ? "/assets/images/icon-minus.svg"
        : "/assets/images/icon-plus.svg";

      answers[i].classList.toggle("active"); // We use the index to target the correct answer
    }
  });
});
