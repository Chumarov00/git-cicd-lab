const request = require('supertest');
const app = require('../src/app');

describe('Calculator API', () => {
    test('GET / returns API status', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    test('adds 2 and 3', async () => {
        const response = await request(app).get('/api/add/2/3');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(5);
    });

    test('subtracts 4 from 10', async () => {
        const response = await request(app).get('/api/subtract/10/4');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(6);
    });

    test('multiplies 4 and 5', async () => {
        const response = await request(app).get('/api/multiply/4/5');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(20);
    });

    test('divides 10 by 2', async () => {
        const response = await request(app).get('/api/divide/10/2');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(5);
    });

    test('returns error when dividing by zero', async () => {
        const response = await request(app).get('/api/divide/10/0');

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Деление на ноль невозможно');
    });

    test('calculates remainder of division', async () => {
        const response = await request(app).get('/api/modulo/10/3');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(1);
    });

    test('raises 2 to the power of 3', async () => {
        const response = await request(app).get('/api/power/2/3');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(8);
    });

    test('calculates square root of 81', async () => {
        const response = await request(app).get('/api/sqrt/81');

        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(9);
    });

    test('returns error for square root of negative number', async () => {
        const response = await request(app).get('/api/sqrt/-4');

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
            'Нельзя вычислить квадратный корень отрицательного числа'
        );
    });

    test('returns 404 for unknown route', async () => {
        const response = await request(app).get('/api/unknown');

        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Маршрут не найден');
    });
});

describe('Input validation', () => {
    test('rejects non-numeric parameter a', async () => {
        const response = await request(app).get('/api/add/abc/3');

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
            'Параметр a должен быть числом'
        );
    });

    test('rejects non-numeric parameter b', async () => {
        const response = await request(app).get('/api/multiply/4/test');

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
            'Параметр b должен быть числом'
        );
    });
});

describe('CORS support', () => {
    test('adds CORS header to response', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.headers['access-control-allow-origin']).toBe('*');
    });
});