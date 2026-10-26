const express = require('express');
const { validateNumberParam } = require('../middleware/validation');

const router = express.Router();

// Проверка параметров a и b
router.param('a', validateNumberParam);
router.param('b', validateNumberParam);

// Сложение
router.get('/add/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        operation: 'addition',
        a,
        b,
        result: a + b
    });
});

// Вычитание
router.get('/subtract/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        operation: 'subtraction',
        a,
        b,
        result: a - b
    });
});

// Умножение
router.get('/multiply/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        operation: 'multiplication',
        a,
        b,
        result: a * b
    });
});

// Деление
router.get('/divide/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (b === 0) {
        return res.status(400).json({
            error: 'Деление на ноль невозможно'
        });
    }

    res.json({
        operation: 'division',
        a,
        b,
        result: a / b
    });
});

// Остаток от деления
router.get('/modulo/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (b === 0) {
        return res.status(400).json({
            error: 'Деление на ноль невозможно'
        });
    }

    res.json({
        operation: 'modulo',
        a,
        b,
        result: a % b
    });
});

// Возведение в степень
router.get('/power/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        operation: 'power',
        a,
        b,
        result: Math.pow(a, b)
    });
});

// Квадратный корень
router.get('/sqrt/:a', (req, res) => {
    const a = Number(req.params.a);

    if (a < 0) {
        return res.status(400).json({
            error: 'Нельзя вычислить квадратный корень отрицательного числа'
        });
    }

    res.json({
        operation: 'square root',
        a,
        result: Math.sqrt(a)
    });
});

module.exports = router;