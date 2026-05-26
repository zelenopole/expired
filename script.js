const draggable = document.querySelectorAll(".draggable");
let offsetX = 0;
let offsetY = 0;
let activeElement = null;

draggable.forEach((draggable) => {
  draggable.addEventListener("mousedown", (event) => {
    event.preventDefault();
    activeElement = draggable;
    offsetX = event.clientX - draggable.offsetLeft;
    offsetY = event.clientY - draggable.offsetTop;
  });
});

document.addEventListener("mousemove", () => {
  if (activeElement) {
    activeElement.style.left = `${event.clientX - offsetX}px`;
    activeElement.style.top = `${event.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  activeElement = null;
});

const img = document.getElementsByClassName("background-image")[0];
const poem = document.getElementsByClassName("poem")[0];
if (poem && img) {
  poem.addEventListener("scroll", () => {
    const scrollTop = poem.scrollTop;
    const maxScroll = poem.scrollHeight - poem.clientHeight;
    if (maxScroll > 0) {
      const opacity = scrollTop / maxScroll;
      img.style.setProperty("--img-opacity", opacity);
    }
  });
}
