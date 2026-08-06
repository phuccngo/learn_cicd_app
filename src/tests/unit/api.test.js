// src/tests/unit/api.test.js
const request = require('supertest');
const app = require('../../app');

describe('API Routes', () => {
    describe('GET /api/status', () => {
        it('should return status information', async () => {
            const response = await request(app)
                .get('/api/status')
                .expect(200);

            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('timestamp');
            expect(response.body.status).toBe('ok');
        });
    });

    describe('POST /api/data', () => {
        it('should accept valid data', async () => {
            const testData = { message: 'Hello World' };

            const response = await request(app)
                .post('/api/data')
                .send(testData)
                .expect(200);

            expect(response.body).toHaveProperty('success');
            expect(response.body.success).toBe(true);
        });

        it('should reject invalid data', async () => {
            const response = await request(app)
                .post('/api/data')
                .send({})
                .expect(400);

            expect(response.body).toHaveProperty('error');
        });
    });
});