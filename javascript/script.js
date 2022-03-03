window.addEventListener("scroll" ,function(){

    // let navbar = document.getElementById("navy");

    if(window.pageYOffset >= 67.5){
        navbar.classList.add('sticky');
        console.log("ol");
    }
    else{
        navbar.classList.remove('sticky');
    }
});

let click = document.getElementById("btn-quest");
click.addEventListener("click" , function(){
    alert("Do you want to email us");
    console.log("yes");
})
