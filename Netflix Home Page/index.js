let navbar=document.getElementsByClassName("navbar");
window.addEventListener("scroll",()=>{
    if(window.screenY>=100){
        navbar.classList.add("navbar_black")
    }
    else{
        navbar.classList.remove("navbar_black")
    }
})
