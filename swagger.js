const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const getSwaggerPaths = () => {
  const versions = fs.readdirSync(path.join(__dirname, 'src')).filter(dir => dir.startsWith('v'));
  return versions.flatMap(version => {
    const modulesPath = path.join(__dirname, 'src', version, 'modules');
    if (fs.existsSync(modulesPath)) {
      return fs.readdirSync(modulesPath)
        .map(module => path.join(modulesPath, module, 'route.yaml'))
        .filter(fs.existsSync);
    }
    return [];
  });
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Boilerplate',
      version: '1.0.0',
      description: 'This API uses JWT authentication for secured endpoints.',
    },
    tags: [
      { name: 'User Management', description: 'Endpoints related to user operations' },
      { name: 'Payment Transactions', description: 'Endpoints for processing payments' },
      { name: 'Subscription Management', description: 'Subscription-related operations' },
      { name: 'Notification Management', description: 'Handles email, SMS, and push notifications' }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: getSwaggerPaths(),
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { swaggerOptions: { persistAuthorization: true } }));
};
