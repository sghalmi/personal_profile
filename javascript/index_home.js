// controls the dark and light mode 
document.querySelector(".dark_ness").addEventListener("click", function () {
    if (document.querySelector(".dark_mode").style.display == "block") {
        document.querySelector(".dark_mode").style.display = "none";
        document.querySelector(".light_mode").style.display = "block";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    else {
        document.querySelector(".dark_mode").style.display = "block";
        document.querySelector(".light_mode").style.display = "none";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
});

