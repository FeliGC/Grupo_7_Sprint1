
const productsController = {
    
    carritoProductos: (req, res) => {
        res.render('productCart')
    },
    detalleProducto: (req,res) => {
        let idProducto = req.params.id;
        res.render ('')
    },
    crearProducto: (req, res) => {
        res.render('')
    }

};


module.exports = productsController