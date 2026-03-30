const toggle=document.getElementById("menuToggle")
const nav=document.getElementById("navLinks")

toggle.addEventListener("click",()=>{
  nav.classList.toggle("active")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    })
    nav.classList.remove("active")
  })
})