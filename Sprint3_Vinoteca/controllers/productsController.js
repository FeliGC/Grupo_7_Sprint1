
const productsController = {
    carritoProductos: (req, res) => {
        res.render('productCart')
    },
    crearProducto: (req, res) => {
        res.render('creacion-de-productos')
    },
    detalleProducto: (req,res) => {
        let idProducto = req.params.id;
        res.render ('productos')
    },
    editarProducto: (req, res) => {
        res.render('edicion-de-productos')
    },
    mostrarProductos: (req, res) => {
        res.render('detalle-de-los-productos')
    },

};


module.exports = productsController