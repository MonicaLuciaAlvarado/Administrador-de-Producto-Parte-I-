const ProductoController = require("../controllers/producto.controller");

module.exports = (app) =>{
    app.post('/api/productos/', ProductoController.crear_producto);
}