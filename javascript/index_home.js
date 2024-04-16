// controls the dark and light mode 
document.querySelector(".dark_ness").addEventListener("click", function () {
    if (document.querySelector(".dark_mode").style.display == "block") {
        document.querySelector(".dark_mode").style.display = "none";
        document.querySelector(".light_mode").style.display = "block";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector(".align_together_nav").style.backgroundColor = "pink";
        document.querySelector(".nav_tab").style.backgroundColor = "pink";
        document.getElementsByClassName("nav_color")[0].style.color = "black";
        document.getElementsByClassName("nav_color")[1].style.color = "black";
        document.getElementsByClassName("nav_color")[2].style.color = "black";
        document.querySelector(".active").style.color = "black";

    }
    else {
        document.querySelector(".dark_mode").style.display = "block";
        document.querySelector(".light_mode").style.display = "none";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector(".align_together_nav").style.backgroundColor = "pink";
        document.querySelector(".nav_tab").style.backgroundColor = "pink";
        document.getElementsByClassName("nav_color")[0].style.color = "white";
        document.getElementsByClassName("nav_color")[1].style.color = "white";
        document.getElementsByClassName("nav_color")[2].style.color = "white";
        document.querySelector(".active").style.color = "white";
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}