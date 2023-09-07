import express from 'express';
import  { createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado } from '../controllers/empleadoControllers.js'
const router = express.Router()


// Creamos las rutas para el controlador con los metodos http


// GET, muestra
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleado);

// POST, crea
router.post('/', createEmpleado);

// PUT, actualiza
router.put('/:id', updateEmpleado);

// DELETE, elimina
router.delete('/:id', deleteEmpleado);

export default router;
