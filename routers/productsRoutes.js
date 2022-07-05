const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/:id', productsController.detalleProducto);

/* Crear producto */
router.get('/', productsController.crearProducto );


module.exports = router