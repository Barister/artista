// Date today

// Массив с названиями месяцев
const months = [
   "января", "февраля", "марта", "апреля", "мая", "июня",
   "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

// Получаем текущую дату
const currentDate = new Date();

// Извлекаем день, месяц и год
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Форматируем месяц
const formattedMonth = months[monthIndex];

// Собираем строку в нужном формате
const formattedDate = `Старт ${day} ${formattedMonth} ${year}`;

console.log(formattedDate); // Выводим строку в консоль

// Выбираем эл-т с датой
const subtitle = document.querySelector('.main__subtitle');

subtitle.innerHTML = formattedDate;

