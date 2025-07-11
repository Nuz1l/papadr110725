const data = {
    kk: {
        title: "Қымбатты Әкем Нурлан!",
        subtitle: "Сізге үлкен алғыс пен махаббатпен",
        message: "Сіз — менің өмірімдегі ең үлкен тірегім, ақылшы, қорғаным. Сіздің мейірімділігіңіз, еңбексүйгіштігіңіз, әрқашан бізге қамқорлығыңыз — бәрі мен үшін үлгі. Әр күніңіз қуаныш пен шаттыққа толы болсын! Біз Сізді мақтан етеміз, жақсы көреміз!",
        signature: "Сүйіспеншілікпен, Сіздің ұлыңыз Нурасыл және жұбайыңыз Шынар ❤️",
        description: "Әкем Нурлан — нағыз ер-азамат, дана, сабырлы, жанұясына әрдайым қорған. Оның өмірі — еңбектің, адалдықтың, махаббаттың үлгісі. Мұндай әке болғаныма мен бақыттымын!"
    },
    ru: {
        title: "Дорогой Папа Нурлан!",
        subtitle: "С глубокой благодарностью и любовью",
        message: "Вы — моя опора, советчик и герой в жизни. Ваша доброта, трудолюбие и забота о нас — пример для меня. Пусть каждый ваш день будет полон радости и счастья! Мы гордимся вами и любим вас!",
        signature: "С любовью, ваш сын Нурасыл и супруга Шынар ❤️",
        description: "Папа Нурлан — настоящий мужчина, мудрый, терпеливый и опора для всей семьи. Его жизнь — это пример труда, честности и любви. Я счастлив быть его сыном."
    }
};

function setLang(lang) {
    document.getElementById('title').textContent = data[lang].title;
    document.getElementById('subtitle').textContent = data[lang].subtitle;
    document.getElementById('message').textContent = data[lang].message;
    document.getElementById('signature').textContent = data[lang].signature;
    document.querySelector('.description').textContent = data[lang].description;
}
