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
