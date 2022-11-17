const Producto = require("../model/Producto");

//Mostrar
module.exports.mostrar = (req, res) => {
    Producto.find({}, (error, productos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
        //console.log(productos)
        return res.render('index', {productos: productos});
    })
}

//Búsqueda por apellido
module.exports.busqueda = (req, res) => {
    const nombre = req.body.nombre_buscar
    //console.log(`/${nombre}/`)
    //const palabraABuscar = `/${nombre}/`;
    Producto.find({ nombre: { $regex: nombre} }, (error, productos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
        //console.log(productos)
        return res.render('index', {productos: productos});
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const producto = new Producto({
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        stock: Number(req.body.stock),
        precio: Number(req.body.precio),
        descripcion: req.body.descripcion,
        descuento: Number(req.body.descuento)
    })
    /*
    contacto.save(function(error,contacto){
        console.log("Aqui--> 1")
        if(error){
            console.log("Aqui--> 2")
            return res.status(500).json({
                message: 'Error al crear el contacto'
            })
        }
        console.log("Aqui--> 3")
        res.redirect('/')
        return
        console.log("Aqui--> 4")
    })
    */

    producto.save(function (err) {
        if (err) {
          res.status(400).json({
            message: err,
            ok: false,
          });
        } else {
          res.json({
            ok: true,
            data: "OK",
          });
        }
      });
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const imagen = req.body.imagen_editar
    const stock = req.body.stock_editar
    const precio = req.body.precio_editar
    const descripcion = req.body.descripcion_editar
    const descuento = req.body.descuento_editar
    Producto.findByIdAndUpdate(id, {nombre, imagen, stock, precio, descripcion, descuento}, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el contacto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Producto.findByIdAndRemove(id, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el contacto'
            })
        }
        res.redirect('/')
    })
}

