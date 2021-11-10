import React from 'react';



const Error = ({mensaje}) => {
    return ( 
        <div className="card-panel yellow darken-4 error cols12">
            {mensaje}
            </div>
     );
}

 
export default Error;