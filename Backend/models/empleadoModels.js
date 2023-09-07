import mongoose from "mongoose";
const Schema = mongoose.Schema;

const empleadoSchema = new Schema(
    {
        nombre: {type:String},
        edad:   {type:Number},
        pais:   {type:String},
        cargo:  {type:String},
        aniosexperiencia: {type:Number}
    },
    {collection: 'empleados'}
);

export default mongoose.model('EmpleadoModel', empleadoSchema)