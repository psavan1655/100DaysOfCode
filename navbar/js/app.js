const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right top, #f288e2, #487eb0)",
  "linear-gradient(to right top, #688bb9, #5ec89c)",
  "linear-gradient(to right top, #f288e2, #b0b95b)",
];

const options = {
  threshold: 0.7,
};

const observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(entry);
    const gradientInd = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    console.log(coords);
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.background = gradients[gradientInd];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
