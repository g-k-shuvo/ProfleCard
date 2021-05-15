const arrow = document.querySelector(".arrow-container");
const cancel = document.querySelector(".cancel-container");
const hiddenContainer = document.querySelector(".hidden-container");

arrow.addEventListener("click", () => {
  arrow.classList.add("active-arrow");
  if (hiddenContainer.classList.contains("off")) {
    hiddenContainer.classList.remove("off");
    hiddenContainer.classList.add("active");
  }
});

cancel.addEventListener("click", () => {
  arrow.classList.remove("active-arrow");
  if (hiddenContainer.classList.contains("active")) {
    hiddenContainer.classList.remove("active");
    hiddenContainer.classList.add("off");
  }
});
