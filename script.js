let nolight = window.document.getElementById('nolight')
let hyper = window.document.getElementById('hyper')
let lights = window.document.getElementById('light')
let lightspeed = window.document.getElementById('lightspeed')


lightspeed.addEventListener("mouseenter", hover);
lightspeed.addEventListener("mouseleave", leave);

function hover(element, event){
    console.log("hovering")
   // hyper.style.display = "none";
    lights.style.display = "initial";
    nolight.style.display = "initial";
    lights.style.position = "absolute";
    nolight.style.position = "absolute";
    lights.style.zIndex = "0";
    nolight.style.zIndex = "-1";
}
function leave(element, event){
    hyper.style.display = "initial";
    lights.style.display = "none";
    nolight.style.display = "none";
}