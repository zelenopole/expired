const draggable = document.querySelectorAll(".draggable");
let offsetX = 0;
let offsetY = 0;
let activeElement = null;
// Add event listeners to each draggable element
draggable.forEach((draggable) => {
  draggable.addEventListener("mousedown", (event) => {
    event.preventDefault();
    activeElement = draggable;
    offsetX = event.clientX - draggable.offsetLeft;
    offsetY = event.clientY - draggable.offsetTop;
  });
});
// Add event listeners to the document for mousemove and mouseup
document.addEventListener("mousemove", () => {
  if (activeElement) {
    activeElement.style.left = `${event.clientX - offsetX}px`;
    activeElement.style.top = `${event.clientY - offsetY}px`;
  }
});
// Reset activeElement on mouseup
document.addEventListener("mouseup", () => {
  activeElement = null;
});

const img = document.getElementsByClassName("background-image")[0];
const poem = document.getElementsByClassName("poem")[0];
// Add scroll event listener to the poem element
if (poem && img) { // Check if poem and img elements exist
  poem.addEventListener("scroll", () => {
    const scrollTop = poem.scrollTop; // Get the current scroll position of the poem element
    const maxScroll = poem.scrollHeight - poem.clientHeight; // Calculate the maximum scrollable height of the poem element
    // Calculate opacity based on scroll position and set it as a CSS variable
    if (maxScroll > 0) {
      const opacity = scrollTop / maxScroll; // Calculate opacity
      img.style.setProperty("--img-opacity", opacity);
    }
  });
}
