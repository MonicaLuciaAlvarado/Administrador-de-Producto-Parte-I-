const Producto = require("../models/producto.model");


module.exports.crear_producto = (req, res) =>{
    const {nombre, precio, descripcion} = req.body;
    Producto.create({
        nombre,
        precio,
        descripcion
    })
    .then(producto => response.json(producto))
    .catch(err => res.json({message: "Hubo un error"+err}));
}