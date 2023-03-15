import React from 'react';

function Sub(props) {
    
    function acao() {
        props.onClicar(Math.random());
    }


    return (
        <div>
            <button onClick={() => alert("Hello!")}>Say Hello</button>
            <br></br>
            <button onClick={() => {acao()}}>Say Hello</button>
        </div>
    )
}

export default Sub