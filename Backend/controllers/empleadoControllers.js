import EmpleadoModel from "../models/empleadoModels.js";

// Creacion de metodos CRUD

// Mostrar todos los registros 
export const getAllEmpleados = async (req, res) =>{
    try {
        const empleados = await EmpleadoModel.find()
        res.status(200).json(empleados)
    } catch (error) {
        res.json( {message: error.message})
    }
}


// Mostrar un registro
export const getEmpleado = async (req,res) =>{
    try {
        const id = req.params.id
        await EmpleadoModel.findById({_id: id})
        .then ((empleado) =>{
            res.status(200).json(empleado)
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

// Crear un registro
export const createEmpleado = async (req, res) =>{
    try {
        await EmpleadoModel.create(req.body)
        res.status(200).json({
            "message": "Registro Creado Correctamente!!!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}


// Actualizar Registro
export const updateEmpleado = async (req,res) =>{
    try {
        const id = req.params.id
        await EmpleadoModel.updateOne({_id: id}, req.body)
        .then(res => {
            console.log(res);
        })
        res.status(200).json ({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message}) 
    }
}

// Eliminar Registro
export const deleteEmpleado = async (req,res) =>{
    try {
        const id = req.params.id
        await EmpleadoModel.deleteOne({_id: id})
        .then(res => {
            console.log(res);
        })
        res.status(200).json ({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message}) 
    }
}

