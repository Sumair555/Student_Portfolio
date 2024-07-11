document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {myFunction()};
    var header = document.querySelector("header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const headerHeight = document.querySelector('header').offsetHeight;

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
