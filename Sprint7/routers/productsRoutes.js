const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController')
const createValidator = require('../middlewares/products/createValidation');
const uploadFile = require('../middlewares/products/uploadFile');

/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detail/:productoId', productsController.detalle);

/* Crear producto */
router.get('/create-products', createValidator, productsController.crearProducto);
/*Guardar producto*/
router.post('/create-products', uploadFile.single("productImage"), productsController.guardado);

// router.post('/create-products',uploadFile.single("avatarUsuario"), productsController.store);

/* editar producto */
router.get('/edit-products/:productoId', productsController.editar );
router.put('/edit-products/:productoId', productsController.update);

/* Carrito productos */
router.get('/cart', productsController.carritoProductos );
/* Agregar borrado */
router.delete('/delete/:productoId', productsController.borrar);


module.exports = router