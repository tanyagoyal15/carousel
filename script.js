let current = 1;
const images = [
  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
  "https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
];

const container = document.querySelector(".container");
const image = document.querySelector("#img");
let ticking = false;
container.addEventListener("mousewheel", function(e) {
  e.preventDefault();
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (e.deltaY > 0) {
        current = (current + 1) % 4;
      } else if (e.deltaY < 0) {
        if (current > 0) current--;
        else current = 3;
      }

      // main work
      const textContainers = document.getElementsByClassName("data-item");
      const dots = document.getElementsByClassName("dot");
      console.log(textContainers);
      for (var i = 0; i < 4; i++) {
        if (i === current) {
          textContainers[i].classList.add("text-container-selected");
          dots[i].classList.add("dot-selected");
          image.setAttribute("src", images[i]);
          image.classList.add("addAnimation");
        } else {
          textContainers[i].classList.remove("text-container-selected");
          dots[i].classList.remove("dot-selected");
        }
      }
      ticking = false;
    });

    ticking = true;
  }
});
