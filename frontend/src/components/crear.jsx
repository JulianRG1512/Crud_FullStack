import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from'sweetalert2';


const URI = 'http://localhost:8000/empleados/';


const CompCrearEmpleado = () =>{
    const [nombre,setNombre] = useState("");
    const [edad,setEdad] = useState();
    const [pais,setPais] = useState("");
    const [cargo,setCargo] = useState("");
    const [aniosexperiencia,setAniosExperiencia] = useState();
    const [cancelar, setCancelar] = useState(false);
    const navigate = useNavigate();

    const noMostrar =()=>{
        setCancelar(true);
        limpiarCampos();
    }

    const mostrar =() =>{
        navigate('/');
    }

    const limpiarCampos = () =>{
        setNombre("");
        setEdad("");
        setPais("");
        setCargo("");
        setAniosExperiencia("");
    };

    //Procedimiento Guardar

    const guardar = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{
                nombre: nombre,
                edad:edad,
                pais:pais,
                cargo:cargo,
                aniosexperiencia:aniosexperiencia
            }).then(()=>{
                navigate('/')
                Swal.fire({
                    title: "<strong>Registro Exitoso!!!</strong>",
                    html: "<i>El empleado <strong>"+ nombre + "</strong> fue registrado con éxito</i>",
                    icon: 'success',
                    timer: 3000
                })
            }).catch(function(error){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No se logro crear el empleado!',
                  footer: error.AxiosError
                })
              });
            }

    
    return (
               
             <div className='container'>
                <div className="card text-center">
                        <div className="card-header">
                            NUEVO EMPLEADO
                        </div>
                        
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" 
                            onChange={(event) => {
                            setNombre(event.target.value);
                            }}
                            className="form-control" value={nombre} placeholder="Ingrese su nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Edad</span>
                            <input type="number" 
                                onChange={(event) => {
                                setEdad(event.target.value);
                                }}
                                className="form-control" value={edad} placeholder="Ingrese su edad" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Pais</span>
                            <input type="text" 
                                onChange={(event) => {
                                setPais(event.target.value);
                                }}
                                className="form-control" value={pais} placeholder="Ingrese su pais" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Cargo</span>
                            <input type="text" 
                                onChange={(event) => {
                                setCargo(event.target.value);
                                }}
                                className="form-control" value={cargo} placeholder="Ingrese su cargo" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Experiencia</span>
                            <input type="number" 
                                onChange={(event) => {
                                setAniosExperiencia(event.target.value);
                                }}
                                className="form-control" value={aniosexperiencia} placeholder="Ingrese su experiencia" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        </div>

                        <div className="card-footer text-body-secondary">
                            {
                                cancelar? 
                                <div>
                                <button id='mostrar' type="button" className="btn btn-outline-info" onClick={mostrar}>Mostrar</button>
                                </div>
                                :
                                <div>
                                <button id='registrar' type="button" className="btn btn-outline-success"  onClick={guardar}>Registrar</button>
                                <button id='registrar' type="button" className="btn btn-outline-danger"  onClick={noMostrar}>Cancelar</button>
                                </div>
                            }
                        </div>
                </div>
            </div>
      );
    } 
        
                    


           

export default CompCrearEmpleado;