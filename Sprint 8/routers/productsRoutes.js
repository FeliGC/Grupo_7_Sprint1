const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController')
const createValidator = require('../middlewares/products/createValidation');
const uploadFile = require('../middlewares/products/uploadFile');

/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detail/:id', productsController.detalle);

/* Creación de productos */
router.get('/create-products', createValidator, productsController.crearProducto);
router.post('/create-products', uploadFile.single("productImage"), productsController.guardado);

/* Edición de productos */
router.get('/edit-products/:id', productsController.editar );
router.put('/edit-products/:id', uploadFile.single("productImage"), productsController.update);

/* Carrito de productos */
router.get('/carrito', productsController.carritoProductos );

/* Eliminar producto */
router.delete('/delete/:id', productsController.borrar);


module.exports = router