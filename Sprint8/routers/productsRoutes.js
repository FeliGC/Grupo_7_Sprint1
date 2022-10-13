const express = require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController')
const formCreateValidation = require('../middlewares/products/formCreateValidation');
const formEditionValidation = require('../middlewares/products/formEditionValidation');
const uploadFile = require('../middlewares/products/uploadFile');
const authMiddleware = require('../middlewares/users/authMiddleware');

/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detail/:id', productsController.detalle);

/* Creación de productos */
router.get('/create-products', authMiddleware, productsController.crearProducto);
router.post('/create-products', uploadFile.single('productImage'), formCreateValidation, productsController.guardado);
// router.post('/add-file', uploadFile.single('productImage'), productsController.addFile);

/* Edición de productos */
router.get('/edit-products/:id', authMiddleware, productsController.editar );
router.put('/edit-products/:id', uploadFile.single("productImage"), formEditionValidation, productsController.update);

/* Carrito de productos */
router.get('/carrito', authMiddleware, productsController.carritoProductos );

/* Eliminar producto */
router.delete('/delete/:id', authMiddleware, productsController.borrar);


module.exports = router