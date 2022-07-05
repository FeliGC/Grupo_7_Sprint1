
const productsController = {
    carritoProductos: (req, res) => {
        res.render('productCart')
    },
    crearProducto: (req, res) => {
        res.render('')
    },
    detalleProducto: (req,res) => {
        let idProducto = req.params.id;
        res.render ('')
    }

};


module.exports = productsController