const counters = document.querySelectorAll('.skills__ratings-counter');
lines = document.querySelectorAll('.skills__ratings-line span');


counters.forEach((item,i) => { 
    lines[i].style.width = item.innerHTML;
});


document.addEventListener('DOMContentLoaded', function () {

    // Додаємо обробник подій для взаємодії при прокрутці
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const svgGithub = document.getElementById('mySvGithub');
        const svgInsta = document.getElementById('mySvgInsta'); 
        const svgElement = document.getElementById('mySvgTG');
        

        if (scrollTop > 320) {
            document.getElementsByClassName('sidepanel__social')[0].style= "color: black",
            document.getElementsByClassName('sidepanel__social')[0].style.transition = "1s";

        } else {
            document.getElementsByClassName('sidepanel__social')[0].style= "color: white",
            document.getElementsByClassName('sidepanel__social')[0].style.transition = "1s";
        }

        if (scrollTop > 420) {
            document.getElementsByClassName('sidepanel__medias')[0].style= "color: black",
            document.getElementsByClassName('sidepanel__medias')[0].style.transition = "1s";

        } else {
            document.getElementsByClassName('sidepanel__medias')[0].style= "color: white",
            document.getElementsByClassName('sidepanel__medias')[0].style.transition = "1s";
        }     

        if (scrollTop > 490) {
            document.getElementsByClassName('sidepanel__divider')[0].style= "background-color: black",
            document.getElementsByClassName('sidepanel__divider')[0].style.transition = "1s"; 

        } else {
            document.getElementsByClassName('sidepanel__divider')[0].style= "background-color: white",
            document.getElementsByClassName('sidepanel__divider')[0].style.transition = "1s"; 
        }

        if (scrollTop > 600) {
            svgGithub.style.fill = 'black';
            svgGithub.style.transition = "1s"
        } else {
            svgGithub.style.fill = 'white';
            svgGithub.style.transition = "1s"
        }

        if (scrollTop > 650) {
            svgInsta.style.fill = 'black';
            svgInsta.style.transition = "1s"
        } else {
            svgInsta.style.fill = 'white';
            svgInsta.style.transition = "1s"
        }
        
        if (scrollTop > 700) {
            svgElement.style.fill = 'black';
            svgElement.style.transition = "1s"
        } else {
            svgElement.style.fill = 'white';
            svgElement.style.transition = "1s"
        }
});
});
$('.feedback__form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() { 
        $(this).find("input").val("");
        
        $('form').trigger('reset');
        
    });
    return false;
});
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeOverlay = document.querySelector('.menu__overlay'),
      menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('active');
    });
}); 