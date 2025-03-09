require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerSetup = require('./swagger');
const { connectDB } = require('./src/common/database');
const fs = require('fs');
const path = require('path');

const app = express();
connectDB(); // Initialize MongoDB Connection

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Dynamic Version Routing
const versions = fs.readdirSync(path.join(__dirname, 'src')).filter(dir => dir.startsWith('v'));
versions.forEach(version => {
  const modulesPath = path.join(__dirname, 'src', version, 'modules');
  if (fs.existsSync(modulesPath)) {
    const modules = fs.readdirSync(modulesPath);
    modules.forEach(module => {
      const routesPath = path.join(modulesPath, module, 'routes.js');
      if (fs.existsSync(routesPath)) {
        const routes = require(routesPath);
        app.use(`/api/${version}/${module}`, routes);
      }
    });
  }
});

// Setup Swagger Docs
swaggerSetup(app);

// Error Handler Middleware
app.use(require('./src/common/errorHandler'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));