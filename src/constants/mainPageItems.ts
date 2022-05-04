interface ImainPageItems {
    img: string;
    title: string;
    text: string;
} 

const mainPageItems: ImainPageItems[] = [
    {
        img: './static/pictures/mainItems/sertificate.png',
        title: 'Сертификация',
        text: 'Инициирование введения обязательной сертификации на продукцию электромашиностроения'
    },
    {
        img: './static/pictures/mainItems/money.png',
        title: 'Контроль',
        text: 'Введение антидемпинговых пошлин на импортируемые асинхронные электродвигатели на территорию ЕАЭС'
    },
    {
        img: './static/pictures/mainItems/organisation.png',
        title: 'Организация',
        text: 'Организация производства продукции, не выпускаемой на территории Российской Федерации'
    },
]

const mainPageItems2: ImainPageItems[] = [
    {
        img: './static/pictures/mainItems/sertificate2.png',
        title: 'Сертификация',
        text: 'Создание совместного сертификационного органа'
    },
    {
        img: './static/pictures/mainItems/import.png',
        title: 'Импортозамещение',
        text: 'Совместная с Министерством промышленности и торговли разработка программ по импортозамещению'
    },
    {
        img: './static/pictures/mainItems/science.png',
        title: 'Наука',
        text: 'Использование научных разработок сотрудничающих с союзом НИИ'
    },
]

export { mainPageItems, mainPageItems2 };