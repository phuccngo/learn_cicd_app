// src/tests/integration/app.test.js
const request = require('supertest');
const app = require('../../app');

describe('Application Integration Tests', () => {
    describe('Health Check', () => {
        it('should respond to health check', async () => {
            const response = await request(app)
                .get('/health')
                .expect(200);

            expect(response.body).toHaveProperty('status');
            expect(response.body.status).toBe('healthy');
        });
    });

    describe('CORS', () => {
        it('should handle CORS preflight requests', async () => {
            const response = await request(app)
                .options('/api/status')
                .expect(204);

            expect(response.headers).toHaveProperty('access-control-allow-origin');
        });
    });
});