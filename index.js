// index.js
const express = require('express');
const routerApi = require('./routes')
const { boomErrorHandler,logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('¡Hola desde mi primera aplicación Express!');
});

routerApi(app)
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});