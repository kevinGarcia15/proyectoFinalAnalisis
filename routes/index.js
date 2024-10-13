/*Moduli para manejar nuestras rutas */
const productRouter = require('./userRouter')

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/user', userRouter);
}

module.exports = routerApi;