import express, { urlencoded } from 'express';
import cors from 'cors';
import db from './database/db.js';
import empleadoRoutes from './routes/routes.js'
import color from 'colors';

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/empleados', empleadoRoutes);

app.get('/', (req,res) =>{
        res.send('Conexión con el Backend OK!!!')
})

app.listen(port, () => {
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${port}`.brightYellow );
})


