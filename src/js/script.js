
document.addEventListener('DOMContentLoaded', function () {

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

    const languageSelect = document.querySelector('#languageSelect');
    languageSelect.addEventListener('change', function() {
        let selectedLanguage = languageSelect.value;
    
        if (selectedLanguage === 'ua') {
            document.title = ("Web-розробник Чорнобай Сергій");
            document.querySelector('#button1').textContent = 'ПРО МЕНЕ';
            document.querySelector('#button2').textContent = 'МІЙ ДОСВІД';
            document.querySelector('#button3').textContent = 'МОЇ НАВИЧКИ';
            document.querySelector('#button4').textContent = 'МОЇ РОБОТИ';
            document.querySelector('#button5').textContent = 'ПРАЙС ЛИСТ';
            document.querySelector('#button6').textContent = 'КОНТАКТИ';
            document.querySelector('#meMenu').textContent = 'ПРО МЕНЕ';
            document.querySelector('#expMenu').textContent = 'МІЙ ДОСВІД';
            document.querySelector('#skillsMenu').textContent = 'МОЇ НАВИЧКИ';
            document.querySelector('#worksMenu').textContent = 'МОЇ РОБОТИ';
            document.querySelector('#pricelistMenu').textContent = 'ПРАЙС ЛИСТ';
            document.querySelector('#contactsMenu').textContent = 'КОНТАКТИ'; 
            document.querySelector('#sidepanel_social').textContent = 'СОЦІАЛЬНІ';
            document.querySelector('#sidepanel__networks').textContent = 'МЕРЕЖІ';  
            document.querySelector('#Introduce1').textContent = 'Я Сергій Чорнобай';
            document.querySelector('#Introduce2').textContent = 'Я web-розробник з міста Радивилів';
            document.querySelector('#aboutMeBelowPromoTitle').textContent = 'МОЄ ПОРТФОЛІО';
            document.querySelector('#aboutMeBelowPromoSubTitle').textContent = 'ПРО МЕНЕ';
            document.querySelector('#aboutMeSection2').textContent = 'ПРО МЕНЕ';
            document.querySelector('#myName').textContent = 'Я Сергій';
            document.querySelector('#juniorWeb').textContent = "Я Junior Web/Front-end developer. Мій шлях розпочався із пристрасті до веб-розробки та бажання робити вражаючі та функціональні інтерфейси для користувачів. портфоліо ви знайдете мої проекти, де активно застосовуються HTML, CSS та JS щоб кінцевому користувачу було просто, швидко та зручно користуватись розробленим мною сайтом";
            document.querySelector('#webDevelopment').textContent = 'Володію знаннями у Web-розробці, котрі дозволяють мені задовольняти потреби клієнтів, та дають місце подальшому розвитку у цій сфері';
            document.querySelector('#willBe1').textContent = 'Буде доповнятись';
            document.querySelector('#willBe2').textContent = 'Буде доповнятись';
            document.querySelector('#willBe3').textContent = 'Буде доповнятись';
            document.querySelector('#willBe4').textContent = 'Буде доповнятись';
            document.querySelector('#experience_title').textContent = 'ДОСВІД';
            document.querySelector('#whatICan').textContent = 'Чим я корисний';
            document.querySelector('#educate').textContent = 'Навчання';
            document.querySelector('#myExp').textContent = 'Досвід';
            document.querySelector('#educate_item1').textContent = 'Курс Web-Developer від Івана Петриченко';
            document.querySelector('#educate_item2').textContent = 'Курси JS+React, TypeScript від Івана Петриченко';
            document.querySelector('#experience_item1').textContent = '( 2023 - зараз )';
            document.querySelector('#educate_descr1').textContent = 'Закінчивши навчання по курсу Web-Developer від Івана Петриченко набув хороші знання, котрі дозволяють мені отримувати активний досвід в верстці сайтів';
            document.querySelector('#educate_descr2').textContent = 'По закінченню навчання по курсу Web-Developer, продовжив навчання у Івана Петриченко, вивчаючи курс по JS+React а також TypeScript';
            document.querySelector('#experience_descr1').textContent = 'Працюю на фріланс-біржі Upwork, отримуючи на ній дохід та безцінний досвід, котрий покращує мене, як Web-розробника';
            document.querySelector('#skillsTitle').textContent = 'НАВИЧКИ';
            document.querySelector('#skillsUsed').textContent = 'Що я використовую в роботі';
            document.querySelector('#grid_descr1').textContent = "Саме він створює каркас вашого сайту або програми, а п'ята версія дозволить мені створювати більш SEO-оптимізовану структуру вашого продукту";
            document.querySelector('#grid_descr2').textContent = "Ця мова стилів дозволяє мені створювати абсолютно будь-який зовнішній вигляд вашого сайту або програми. Все обмежується лише вашою фантазією!";
            document.querySelector('#grid_descr3').textContent = 'Ця мова програмування дозволяє оживити все, що завгодно: слайдери, вікна, підказки, вкладки, отримання даних від сервера та багато іншого';
            document.querySelector('#grid_descr4').textContent = 'Бібліотека Jquery дозволить прискорити розробку. Без необхідності інтегрувати в проект ми її не будемо, але звичка роботи з нею присутня';
            document.querySelector('#grid_descr5').textContent = 'Ця бібліотека дозволяє створювати веб-застосунки. Ми можемо створити максимально інтерактивний продукт саме під ваші цілі';
            document.querySelector('#grid_descr6').textContent = 'Ця мова програмування являє собою надмножину JavaScript. Вона дозволяє розробникам створювати більш надійні та масштабовані застосунки.';
            document.querySelector('#grid_title5').textContent = 'React (в процесі освоєння)';
            document.querySelector('#grid_title6').textContent = 'TypeScript (в процесі освоєння)';
            document.querySelector('#portfolio_title').textContent = 'ПОРТФОЛІО';
            document.querySelector('#portfolio_works').textContent = 'Мої роботи';
            document.querySelector('#pricelist1').textContent = 'ПРАЙС ЛИСТ';
            document.querySelector('#price_type1').textContent = 'Landing-page';
            document.querySelector('#price_count1').textContent = 'Індивідуально.';
            document.querySelector('#price_descr1').textContent = 'Односторінковий сайт для презентації послуг/товарів/...';
            document.querySelector('#price_type2').textContent = 'Корпоративний сайт';
            document.querySelector('#price_count2').textContent = 'Індивідуально.';
            document.querySelector('#price_descr2').textContent = 'Сайт для вашого бізнесу чи компанії';
            document.querySelector('#price_type3').textContent = 'Інтернет магазин';
            document.querySelector('#price_count3').textContent = 'Індивідуально.';
            document.querySelector('#price_descr3').textContent = 'Інструмент для ваших продаж в мережі';
            document.querySelector('#feedback_contacts').textContent = 'КОНТАКТИ';
            document.querySelector('#contactMe').textContent = "Зв'яжіться зі мною";
            document.querySelector('#contactAnyWays').textContent = "Будь яким зручним для вас способом"; 
            document.querySelector('#leaveContacts').textContent = "Або залиште ваші дані і я сам вам напишу"; 
            document.querySelector('#labelName').textContent = "Ваше ім'я";
            document.querySelector('#labelEmail').textContent = "Ваша ел.пошта"; 
            document.querySelector('#labelMessage').textContent = "Ваше повідомлення"; 
            document.querySelector('#sendButton').textContent = "ВІДПРАВИТИ ПОВІДОМЛЕННЯ";
            document.querySelector('#spanAgree').textContent = "Я погоджуюсь з"; 
            document.querySelector('#policyLink').textContent = "політикою конфіденційності";

        } else {
            document.title = ("Web-Developer Chornobai Serhii");
            document.querySelector('#button1').textContent = 'ABOUT ME';
            document.querySelector('#button2').textContent = 'MY EXPERIENCE'; 
            document.querySelector('#button3').textContent = 'MY SKILLS';
            document.querySelector('#button4').textContent = 'MY WORKS';
            document.querySelector('#button5').textContent = 'PRICE LIST';
            document.querySelector('#button6').textContent = 'CONTACTS';
            
            document.querySelector('#meMenu').textContent = 'ABOUT ME';
            document.querySelector('#expMenu').textContent = 'MY EXPERIENCE'; 
            document.querySelector('#skillsMenu').textContent = 'MY SKILLS';
            document.querySelector('#worksMenu').textContent = 'MY WORKS';
            document.querySelector('#pricelistMenu').textContent = 'PRICE LIST';
            document.querySelector('#contactsMenu').textContent = 'CONTACTS';

            document.querySelector('#sidepanel_social').textContent = 'SOCIAL';
            document.querySelector('#sidepanel__networks').textContent = 'NETWORKS';  
            document.querySelector('#Introduce1').textContent = "I'm Serhii Chornobai";
            document.querySelector('#Introduce2').textContent = "I'm a web-developer from Ukraine";
            document.querySelector('#aboutMeBelowPromoTitle').textContent = 'MY PORTFOLIO';
            document.querySelector('#aboutMeBelowPromoSubTitle').textContent = 'ABOUT ME';
            document.querySelector('#aboutMeSection2').textContent = 'ABOUT ME';
            document.querySelector('#myName').textContent = "I'm Serhii";
            document.querySelector('#juniorWeb').textContent = "I'm a Junior Web/Front-end developer. My journey began with a passion for web development and a desire to create impressive and functional interfaces for users. In MY PORTFOLIO, you will find my projects where HTML, CSS, and JS are actively applied to ensure that the end user can easily, quickly, and conveniently navigate through the websites I have developed.";
            document.querySelector('#webDevelopment').textContent = "I possess knowledge in web development, which allows me to meet the needs of clients and provides room for further growth in this field";
            document.querySelector('#willBe1').textContent = 'Will be supplemented';
            document.querySelector('#willBe2').textContent = 'Will be supplemented';
            document.querySelector('#willBe3').textContent = 'Will be supplemented';
            document.querySelector('#willBe4').textContent = 'Will be supplemented';
            document.querySelector('#experience_title').textContent = 'EXPERIENCE';
            document.querySelector('#whatICan').textContent = 'What I bring to the table';
            document.querySelector('#educate_item1').textContent = 'Web Developer Course by Ivan Petrychenko';
            document.querySelector('#educate_item2').textContent = 'JS+React, TypeScript Courses by Ivan Petrychenko';
            document.querySelector('#experience_item1').textContent = '( 2023 - now )';
            document.querySelector('#educate_descr1').textContent = 'After completing the Web Developer course by Ivan Petrychenko, I gained valuable knowledge that allows me to gain hands-on experience in website development';
            document.querySelector('#educate_descr2').textContent = 'After completing the Web Developer course, I continued my studies with Ivan Petrychenko, taking courses on JS+React, as well as TypeScript';
            document.querySelector('#experience_descr1').textContent = 'I work on the UpWork freelance platform, earning income and gaining invaluable experience that enhances me as a web developer';
            document.querySelector('#grid_descr1').textContent = "It creates the framework for your website or application, and the fifth version allows me to build a more SEO-optimized structure for your product.";
            document.querySelector('#grid_descr2').textContent = "This style language allows me to create virtually any appearance for your website or application. Everything is limited only by your imagination!";
            document.querySelector('#grid_descr3').textContent = 'This programming language allows me to bring anything to life: sliders, pop-ups, tooltips, tabs, fetching data from the server, and much more.';
            document.querySelector('#grid_descr4').textContent = "The jQuery library speeds up development. We won't integrate it into the project unless necessary, but the habit of working with it is present.";
            document.querySelector('#grid_descr5').textContent = 'This library allows the creation of web applications. We can create a highly interactive product tailored to your goals.';
            document.querySelector('#grid_descr6').textContent = 'This programming language is a superset of JavaScript. It enables developers to create more reliable and scalable applications.';
            document.querySelector('#portfolio_title').textContent = 'PORTFOLIO';
            document.querySelector('#portfolio_works').textContent = 'My works'; 
            document.querySelector('#pricelist1').textContent = 'PRICE LIST';
            document.querySelector('#price_type1').textContent = 'Landing-page';
            document.querySelector('#price_count1').textContent = 'Individually';
            document.querySelector('#price_descr1').textContent = 'Single-page website for presenting services/products/...';
            document.querySelector('#price_type2').textContent = 'Corporate Website';
            document.querySelector('#price_count2').textContent = 'Individually';
            document.querySelector('#price_descr2').textContent = 'A website for your business or company.';
            document.querySelector('#price_type3').textContent = 'Online Store';
            document.querySelector('#price_count3').textContent = 'Individually';
            document.querySelector('#price_descr3').textContent = 'A tool for your online sales.';
            document.querySelector('#labelName').textContent = "Your Name";
            document.querySelector('#labelEmail').textContent = "Your Email"; 
            document.querySelector('#labelMessage').textContent = "Your Message";
            document.querySelector('#sendButton').textContent = "SEND MESSAGE";
            document.querySelector('#spanAgree').textContent = "I agree"; 
            document.querySelector('#policyLink').textContent = "to the privacy policy";
        }
      });
});