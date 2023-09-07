import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from'sweetalert2';



const URI = 'https://crudfullstack-empleados.onrender.com/empleados/';

const CompMostrarEmpleado = () =>{
   

    const [busqueda, setBusqueda] = useState("");
    const [empleadosList, setEmpleado] = useState([]);
    const [nombre,setNombre] = useState("");
    const [edad,setEdad] = useState();
    const [pais,setPais] = useState("");
    const [cargo,setCargo] = useState("");
    const [aniosexperiencia,setAniosExperiencia] = useState();
    

    useEffect(()=>{
        getEmpleados()
    },[])

    const filtrar = (terminoBusqueda) =>{
      var resultadoBusqueda=empleadosList.filter((elemento) => {
        if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.cargo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
      setEmpleado(resultadoBusqueda);
    }

    const limpiarBuscador = () =>{
      setBusqueda("");
    };

    



    //Procedimiento para mostrar todos los empleados
    const getEmpleados = async () =>{
        const res = await axios.get(URI)
        setEmpleado(res.data)
    }

    //Procedimiento para eliminar
    const deleteEmpleado = async (id) =>{
            Swal.fire({
            title: 'Confirmar eliminado?',
            html: "<i>Realmente desea eliminar el registro?</i>",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!'
          }).then((result) => {
      
            if (result.isConfirmed) {
              axios.delete(`${URI}${id}`).then(()=>{
              getEmpleados();

              Swal.fire({
                icon: 'success',
                title: 'El registro se elimino correctamente.',
                showConfirmButton: false,
                timer: 2000
              });
            })
            .catch(function(error){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro eliminar el empleado!'+ nombre,
                footer: error.AxiosError
              })
            });



          }
        })
          
    }

    return(

            <div className='container'>
              <div className="card text-center">
                  <div className="card-header">
                      GESTIÓN DE EMPLEADOS
                  </div>
                </div>
                
                <Link to='/crear' className='btn btn-primary mt-2 mb-2'>Nuevo <i className="fa-solid fa-plus fa-flip"></i></Link>
                
                
                
                <div className='containerInput'>
                  <div className="input-group mb-3" id='busqueda'>
                    <span className="label-busqueda" id="basic-addon1">Buscar</span>
                      <input type='text' 
                        onChange={(event) =>{
                        setBusqueda(event.target.value);
                        console.log("Buscando: " + event.target.value);
                        filtrar(event.target.value);
                        }}
                        className="input-busqueda"
                        value={busqueda} 
                        placeholder="Por Nombre o Cargo" aria-label="Username" aria-describedby="basic-addon1"/>
                      <button className='btn btn-success' onClick={ ()=>{
                        getEmpleados()
                        limpiarBuscador()
                        }} >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                  </div>
                </div>

                   
                
                    <div className='row'>
                    <div className='col'>


                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Experiencia</th>
                            
                          </tr>
                        </thead>

                        <tbody>
                          { empleadosList.map((empleado,index) => (
                              <tr key={index}>
                              <th>{empleado.id}</th>
                              <td>{empleado.nombre}</td>
                              <td>{empleado.edad}</td>
                              <td>{empleado.pais}</td>
                              <td>{empleado.cargo}</td>
                              <td>{empleado.aniosexperiencia}</td>
                                <td>
                                    <Link to={`/edit/${empleado._id}`} className='btn btn-info m-2'>Editar<i className="fa-solid fa-pen-to-square m-2"></i></Link>
                                    <button onClick={ ()=>deleteEmpleado(empleado._id) } className='btn btn-danger'>Eliminar<i className="fa-solid fa-trash m-2"></i></button>
                                </td>
                              </tr>
                              ))}
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
          )
};          

            
export default CompMostrarEmpleado;
