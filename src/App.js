import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import ClimaResultado from './components/ClimaResultado';


function App() {

  // State principal
  // ciudad = state, guardarCiudad = this.setState({})
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
  //prevenir ejecucion 
  if (ciudad === '') return;

  const consultarAPI = async() => {

    const appId = '7edfe890722c0b69f4e9174b2bbb9b9d';
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
  //consultar la URL
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  
  guardarResultado(resultado); 
  }

  consultarAPI();
  }, [ ciudad, pais ]);


const datosConsulta = datos => {
  //Validar que ambos campos esten agregados
  if(datos.ciudad === '' || datos.pais === '')
  {
  guardarError(true);
    return;
  }

  //Si ciudad y pais existen agregarlos al state
  guardarCiudad(datos.ciudad);
  guardarPais(datos.pais);
  guardarError(false);
}

//Se carga un componente condicionalmente
let componente;
if(error){
//Hay un error mostrarlo
componente = <Error mensaje='Por favor diligenciar los campos' />
} else if (resultado.cod === '404') {
  componente = <Error mensaje="La ciudad no existe en el registro" />

} else {
  //Mostrar el clima
  componente = <ClimaResultado 
  resultado={resultado}
             />;
}

  return (
    <div ClassName="App">
      <Header 
      titulo='APLICACIÓN DEL CLIMA ESTEBAN ORTIZ'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
              datosConsulta={datosConsulta}
              />
            </div>
            <div className="col m6 s12">
                 {componente}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

