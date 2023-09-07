
import './App.css';
import CompMostrarEmpleado from './components/mostrar';
import CompCrearEmpleado from './components/crear';
import CompEditEmpleado from './components/editar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompMostrarEmpleado />}/>
          <Route path='/crear' element={ <CompCrearEmpleado />}/>
          <Route path='/edit/:id' element={ <CompEditEmpleado />}/>
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
