const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculator');

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешение запросов с других источников
app.use(cors());

// Обработка JSON
app.use(express.json());

// Главная страница API
app.get('/', (req, res) => {
    res.json({
        message: 'Веб-калькулятор работает',
        status: 'OK'
    });
});

// Маршруты калькулятора
app.use('/api', calculatorRoutes);

// Обработка неизвестных адресов
app.use((req, res) => {
    res.status(404).json({
        error: 'Маршрут не найден'
    });
});

// Запуск сервера только при прямом выполнении файла
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
}

module.exports = app;