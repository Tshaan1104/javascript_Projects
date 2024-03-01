const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
// console.log(window.innerHeight)

function checkBoxes() {
  const topboxes=((window.innerHeight / 7) * 6);
  boxes.forEach(box=> {
    const boxtop=box.getBoundingClientRect().top
    if (boxtop<topboxes){
        box.classList.add('show')

    }
    else{
        box.classList.remove('show')
    }
  })

}
