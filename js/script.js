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
