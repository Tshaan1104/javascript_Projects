const panels=document.querySelectorAll('.panel')

panels.forEach(()=>{
    panels.addEventListener('click',()=>{
        removeActiveclasses()
        panels.classList.add('active')
    })
})

function removeActiveclasses(){
    panels.forEach(panel=>{
        panels.classList.remove('active')
    })
}