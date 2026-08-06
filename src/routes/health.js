// src/routes/health.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
try {
// Check database connection
const dbStatus = await checkDatabase();

// Check external services
const externalStatus = await checkExternalServices();

const healthStatus = {
status: 'healthy',
timestamp: new Date().toISOString(),
version: process.env.APP_VERSION || '1.0.0',
services: {
database: dbStatus,
external: externalStatus
}
};

res.status(200).json(healthStatus);
} catch (error) {
res.status(503).json({
status: 'unhealthy',
timestamp: new Date().toISOString(),
error: error.message
});
}
});

async function checkDatabase() {
// Add database health check logic
return { status: 'healthy', responseTime: '10ms' };
}

async function checkExternalServices() {
// Add external service health check logic
return { status: 'healthy', services: [] };
}

module.exports = router;