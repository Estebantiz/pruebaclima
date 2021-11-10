import React from 'react';

function ClimaResultado({resultado}) {

    //extraer los valores
    const { name, main } = resultado;
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;

    const pascal = 100;
    

    return (
        <div className="card-panel purple col s12">
             <div className="white-text">
             <h2>El clima de {name} es:</h2>
             <p className="temperatura">
                    { parseInt( main.temp - kelvin, 10 ) } <span> &#x2103; </span> 
                </p>
                <p>Temperatura Máxima: { parseInt( main.temp_max - kelvin, 10 ) } &#x2103;
                </p>
                <p>Temperatura Minima: { parseInt( main.temp_min - kelvin, 10 ) }  &#x2103; 
                </p>
                <p>Humedad: { main.humidity } &#x25;  
                </p>
                <p>Presion: {  main.pressure * pascal }  &#x21cA; 
                </p>
             </div>
        </div>
    )
}

export default ClimaResultado;

