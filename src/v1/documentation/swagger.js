const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

// Basic Metadatos Informations about our API

const options = {
  definition:{
    openapi: "3.0.0",
    info: {
      title: "E-commerce Challenge Bsale",
      version: "1.0.0"
    }
  },
  apis: ["./src/v1/routes/productRoutes.js", "./src/v1/routes/categoryRoutes.js", "./src/database/db.js"]
}

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);


// Function to setup our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://e-commerce-back-bsale-production.up.railway.app:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
