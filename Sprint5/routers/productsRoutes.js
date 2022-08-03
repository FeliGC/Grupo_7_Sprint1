const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const path = require('path');
const multer = require('multer');


/* Mostrar los productos */
router.get('/', productsController.mostrarProductos );

/* Detalle de productos */
router.get('/detail/:productoId', productsController.detalleProducto);

/* Crear producto */
router.get('/create-products', productsController.crearProducto);

var storage = multer.diskStorage({

    destination: function(req,file,cb) {
    cb(null, path.join(__dirname,"../public/images"));
    },
    filename: function (req,file, cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }})

var upload = multer({storage:storage})
router.post('/create-products',upload.single("avatarUsuario") ,productsController.store);



/* editar producto */
router.get('/edit-products/:productoId', productsController.editarProducto );
router.put('/edit-products/:productoId', productsController.update);


/* Carrito productos */
router.get('/cart', productsController.carritoProductos );
/* Agregar borrado */
router.delete('/delete/:productoId', productsController.borrar);


module.exports = router