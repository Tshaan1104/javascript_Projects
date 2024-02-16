const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;



next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);
  update(currentActive);
});
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive <= 1) {
    currentActive = 1;
  }
  //   console.log(currentActive);
  update(currentActive);
});

function update() {
  let t = 33 * (currentActive - 1) + "%";
  progress.style.width = t;
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });


if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}