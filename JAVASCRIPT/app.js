let add = document.querySelector("#add");
let h4 = document.querySelector("h4");
let h1 = document.querySelector("h1");
let count = true;
add.addEventListener("click",()=>{
    if(count){
        h4.innerText = "Friends";
        h4.style.color = "green"
        add.innerText = "Cancel Request";
        add.style.background = "#dadada"
        add.style.color = "black"
        count = false;
    }
    else{
        h4.innerText = "Stranger"
        h4.style.color = "red"
        add.innerText = "Add Friend"
        add.style.background = "cadetblue"
        add.style.color = "#fff"
        count = true;
    }
})
