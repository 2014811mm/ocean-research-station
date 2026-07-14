// 1. Створюємо базу даних для наших зон океану
const zoneData = {
    "The Sunlit Surface": {
        title: "The Sunlit Surface",
        text: "Тут живе більшість відомих нам морських мешканців: дельфіни, кити, морські черепахи та яскраві клоуни. Сюди потрапляє понад 90% сонячного світла, тому вода тут найтепліша!",
        image: "./images/Sunlit Surface.png" // Перевір назву цього файлу
    },
    "The Twilight Zone": {
        title: "The Twilight Zone",
        text: "Сутінкова зона океану (від 200 до 1000 метрів). Сюди доходить лише слабке синє світло. Вода тут прохолодна, а більшість риб мають величезні очі, щоб бачити у темряві.",
        image: "./images/Twilight Zone.png" // Сюди можна закинути картинку для другої зони
    },
    "The Midnight Zone": {
        title: "The Midnight Zone",
        text: "Опівнічна зона (глибше 1000 метрів) — світ абсолютної темряви та крижаної води. Створіння тут виглядають космічно, а деякі з них самі підсвічують собі шлях (біолюмінесценція).",
        image: "./images/Midnight Zone.png" // Сюди картинку для третьої зони
    }
};

// 2. Знаходимо всі потрібні елементи на сторінці HTML
const zoneButtons = document.querySelectorAll('.zone-btn');
const depthTitle = document.querySelector('.depth-card__subtitle');
const depthText = document.querySelector('.depth-card__text');
const depthImage = document.querySelector('.depth-card__image img');

// 3. Додаємо слухач подій (клік) на кожну кнопку зон
zoneButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Спочатку прибираємо підсвічування (клас active) з усіх кнопок
        zoneButtons.forEach(btn => btn.classList.remove('active'));
        
        // Додаємо підсвічування саме тій кнопці, на яку натиснули
        button.classList.add('active');

        // Беремо назву зони прямо з тексту кнопки
        const selectedZone = button.textContent.trim();

        // Якщо в нашій базі даних є така зона — оновлюємо інформацію в картці
        if (zoneData[selectedZone]) {
            depthTitle.textContent = zoneData[selectedZone].title;
            depthText.textContent = zoneData[selectedZone].text;
            depthImage.src = zoneData[selectedZone].image;
            depthImage.alt = zoneData[selectedZone].title;
        }
    });
});
