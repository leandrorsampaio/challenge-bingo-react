import React from 'react';
import Sub from './Sub';
import Sub2 from './Sub2';

function Super() {
    
    function quandoClicar(valorGerado) {
        console.log('ACAO!!')
        console.log(valorGerado)
    }


    return (
        <div>
            <h4>valor: </h4>
            <Sub onCLicar={quandoClicar}></Sub>

            <Sub2 />
        </div>
    )
}

export default Super