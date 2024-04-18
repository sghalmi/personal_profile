let list_img = document.querySelectorAll('.front');
let back_desc = document.querySelectorAll('.back');

var clicked_i = false;
var clicked_b = false;
list_img.forEach(function (i) {
    i.addEventListener('click', function () {
        i.style.display = "none";
        i.nextElementSibling.style.display = 'block';
    });
});

back_desc.forEach(function (j) {
    j.addEventListener('click', function () {
        j.style.display = "none";
        j.previousElementSibling.style.display = 'block';
    });
});


