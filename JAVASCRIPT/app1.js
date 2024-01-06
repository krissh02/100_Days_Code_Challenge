let img =  document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick",()=>{
    i.style.transform = 'translate(-50%,-50%) scale(2)'
    i.style.opacity = 0.8;
    i.style.color = "red";
    setTimeout(()=>{
        i.style.opacity = 0;
    },1000);
    setTimeout(()=>{
        i.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000);
});
