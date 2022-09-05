const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detalle/:productoId', productsController.detalleProducto);

/* Crear producto */
router.get('/crear-producto', productsController.crearProducto );

/* editar producto */
router.get('/editar-producto/:productoId', productsController.editarProducto );

/* Carrito productos */
router.get('/carrito', productsController.carritoProductos );



module.exports = router