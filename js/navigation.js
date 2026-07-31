document.querySelectorAll("[data-screen]").forEach(button=>{

button.addEventListener("click",()=>{

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(button.dataset.screen)

.classList.add("active");

});

});
