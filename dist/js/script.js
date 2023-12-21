const counters = document.querySelectorAll('.skills__ratings-counter'),
lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item,i) => { 
    lines[i].style.width = item.innerHTML;
});


document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо посилання на sidepanel та sidepanel_black
    const sidepanel = document.getElementById('sidepanel');
    const sidepanel_black = document.getElementById('sidepanel_black');

    // Додаємо обробник подій для взаємодії при прокрутці
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 400) {
            sidepanel.classList.add('sidepanel_hidden');
            sidepanel_black.classList.add('sidepanel_black_visible');
        } else {
            sidepanel.classList.remove('sidepanel_hidden');
            sidepanel_black.classList.remove('sidepanel_black_visible');
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
      menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // remove the 'active' class from the menu
        menu.classList.remove('active');
    });
});