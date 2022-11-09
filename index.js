const server = require('./src/index.js');
const {conn} = require('./src/database/db.js');
const {swaggerDocs: V1SwaggerDocs} = require('./src/v1/documentation/swagger.js');

const port = process.env.PORT || 3001;

(async () => {
  try {
    await conn.authenticate()
    server.listen(port, () => {
      console.log(`🚀 listening at ${port} 🚀`); // eslint-disable-line no-console
      V1SwaggerDocs(server, port)
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()
