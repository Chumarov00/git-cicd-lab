const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Позволяет серверу принимать данные в формате JSON
app.use(express.json());

// Главная страница API
app.get('/', (req, res) => {
    res.json({
        message: 'Веб-калькулятор работает',
        status: 'OK'
    });
});

// Сервер запускается только при прямом выполнении app.js.
// Это позволит подключать приложение в автоматических тестах.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
}

module.exports = app;