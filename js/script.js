const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    console.log(icon);
  });
});
