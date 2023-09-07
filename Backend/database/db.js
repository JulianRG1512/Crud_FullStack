import mongoose from 'mongoose';
import 'dotenv/config';


const url=  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.caw59al.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


mongoose.connect(url)

const db = mongoose.connection
db.on('open', () => console.log('Conectado a MongoDB!!!'.brightYellow))
db.on('error', () => console.log('Error al conectar a MongoDB'.brightYellow))






export default db;