const express = require('express');
const calculatorRoutes = require('./routes/calculator');

const app = express();
const PORT = process.env.PORT || 3000;

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

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
}

module.exports = app;