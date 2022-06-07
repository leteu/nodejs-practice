import loaders from './loaders';
import express from 'express';
const routes = require('./routes');

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });
  app.use(routes);

  app.listen(process.env.PORT||8080, () => {
    console.log(`Your server is ready on ${process.env.PORT||8080} port!`);
  });
}

startServer();