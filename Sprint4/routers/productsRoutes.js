const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const multer = require('multer');


/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detalle/:productoId', productsController.detalleProducto);

/* Crear producto */
router.get('/crear-producto', productsController.crearProducto );

var storage = multer.diskStorage({

    destination: function(req,file,cb) {
    cb(null, path.join(__dirname,"../../public/images/products"))
    },
    filename: function (req,file, cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }})

var upload = multer({storage:storage})
router.post('/crear-producto',upload.single("avatarUsuario") ,productsController.store);



/* editar producto */
router.get('/editar-producto/:productoId', productsController.editarProducto );
router.put('/editar-producto/:productoId', productsController.update);


/* Carrito productos */
router.get('/carrito', productsController.carritoProductos );
/* Agregar borrado */
router.delete('???', productsController.borrar);


module.exports = router