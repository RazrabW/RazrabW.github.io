const infoText = `
        <h2>Обо мне</h2>
        <p>Привет. Меня зовут Олег, я живу в Санкт-Пететрбурге. Занимаюсь программированием уже 4 года. 
        Сначала разрабатывал простые сайты. Затем начал углублённо 
        изучать <i>JavaScript</i> и после <i>node.js</i>. С недавнего времени пишу <i>web-приложения</i> с применением node.js. 
        Так-же умею работать с Git, Gulp. Разрабатывал ботов для Telegram</p>
`;

const projectsText = `
        <h2>Мои проекты</h2>
        <p><a href="http://voltronshop.ru">Voltron</a> - интернет магазин радиодеталей</p>
        <p><a href="https://github.com/Oleg-chernov/WebOS">WebOS</a> - маленькая операционая система, которая запускается в браузере</p>
`;

document.querySelector('#info').innerHTML = infoText;
document.querySelector('#projects').innerHTML = projectsText;