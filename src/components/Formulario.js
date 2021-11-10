import React, { useState } from 'react';

function Formulario({datosConsulta}){

    //state del componente
    // busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais: ''
    })

    const handleChange = e => {
        // se cambia el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

    }

    const consultarClima = e => {
        e.preventDefault();

        //se pasa hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return ( 
        <form
        onSubmit={consultarClima}
        >
           <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Por favor seleccione un país</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brasil</option>
                    <option value="CA">Canadá</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="KR">Corea del Sur</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="JP">Japón</option>
                    <option value="IT">Italia</option>
                    <option value="MX">México</option>
                    <option value="PA">Panamá</option>   
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block green accent-4"
                value="Obtener Clima" />
            </div>
        </form>
     );
}



export default Formulario;
