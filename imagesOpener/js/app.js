const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const neuomorp = document.querySelector(".neuomorphism");
const imgText = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    imgText.classList.add("neuomorphism");
    //Dynamic image load
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full-images/${originalSrc}`;
    const textSrc = preview.alt;
    imgText.textContent = textSrc;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
