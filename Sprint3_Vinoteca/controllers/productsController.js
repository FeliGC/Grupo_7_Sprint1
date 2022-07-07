const productos = [
    {
        id: 1,
        img: "Vino-Tinto.jpg",
        nombre: "Vino Tinto",
        precio: "$ARS 1700",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.",
        categoria: "Crianza, Tinto, Semiseco",
    },
    {
        id: 2,
        img: "Vino-Blanco.jpg",
        nombre: "Vino Blanco",
        precio: "$ARS 1770",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.",
        categoria: "Reserva, Blanco, Abocado"
    },
    {
        id: 3,
        img: "Vino-Rosado.jpg",
        nombre: "Vino Rosado",
        precio: "$ARS 1250",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.",
        categoria: "Joven, Rosado, Muy Dulce"
    },
    {
        id: 4,
        img: "Vino-Espumeante.jpg",
        nombre: "Vino Espumoso",
        precio: "$ARS 8500",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.",
        categoria: "Gran Reseva, Espumoso, Dulce"
    }
]



const productsController = {
    mostrarProductos: (req, res) => {
        res.render('productos', {listaDeProductos: productos});
    },
    detalleProducto: (req, res) => {
        let id = req.params.productoId;

        let producto = productos.find((producto) => {
            return producto.id == id;
        });

        res.render('detalle-de-los-productos', { producto: producto });
    },
    carritoProductos: (req, res) => {
        res.render('productCart', {})
    },
    crearProducto: (req, res) => {
        res.render('creacion-de-productos', {listaDeProductos: productos})
    },
    editarProducto: (req, res) => {
        res.render('edicion-de-productos', {listaDeProductos: productos})
    }
};


module.exports = productsController