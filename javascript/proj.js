window.addEventListener('scroll', function (e) {
    if (window.scrollY > 725 && window.innerWidth > 720) {
        console.log("hiii");
        document.querySelector('.side_bar').setAttribute('id', 'past_pt_sidebar');
        document.querySelector('.besides_sidebar').setAttribute('id', 'past_besides');
        document.querySelector('.information').setAttribute('id', 'pls_work');
    }

    if (window.scrollY < 725 && window.innerWidth > 720) {
        console.log("goooo");
        document.querySelector('.side_bar').removeAttribute('id', 'past_pt_sidebar');
        document.querySelector('.besides_sidebar').removeAttribute('id', 'past_besides');
        document.querySelector('.information').removeAttribute('id', 'pls_work');
    }
});

window.addEventListener('scroll', function (e) {
    if (window.scrollY > 650 && window.innerWidth <= 720) {
        document.querySelector('.side_bar').setAttribute('id', 'mobile_side_bar');
    }

    if (window.scrollY < 650 && window.innerWidth <= 720) {
        document.querySelector('.side_bar').removeAttribute('id', 'mobile_side_bar');
    }
});

// controls the dark and light mode 
document.querySelector(".dark_ness").addEventListener("click", function () {
    if (document.querySelector(".dark_mode").style.display == "block") {
        document.querySelector(".dark_mode").style.display = "none";
        document.querySelector(".light_mode").style.display = "block";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector(".side_bar").style.backgroundColor = 'white';
        var sideBar = document.querySelector(".side_bar");
        var links = sideBar.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = 'black';
        }
        document.querySelectorAll(".not_desktop a").forEach(function(element) {
            element.style.color = "purple";
        });
        
    }
    else {
        document.querySelector(".dark_mode").style.display = "block";
        document.querySelector(".light_mode").style.display = "none";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector(".side_bar").style.backgroundColor = 'black';
        var sideBar = document.querySelector(".side_bar");
        var links = sideBar.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = 'white';
        }
        document.querySelectorAll(".not_desktop a").forEach(function(element) {
            element.style.color = "pink";
        });
        
    }
});

