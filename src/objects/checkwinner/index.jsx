import React, { useState } from "react";
import './style.scss'

const Checkwinner = (props) => {

    switch (true) {
        case (props.clickedIndexes.includes(1) && props.clickedIndexes.includes(2) && props.clickedIndexes.includes(3) && props.clickedIndexes.includes(4) && props.clickedIndexes.includes(5)):
            console.log('Linha 1');
            break;
        case (props.clickedIndexes.includes(6) && props.clickedIndexes.includes(7) && props.clickedIndexes.includes(8) && props.clickedIndexes.includes(9) && props.clickedIndexes.includes(10)):
            console.log('Linha 2');
            break;
        case (props.clickedIndexes.includes(11) && props.clickedIndexes.includes(12) && props.clickedIndexes.includes(13) && props.clickedIndexes.includes(14) && props.clickedIndexes.includes(15)):
            console.log('Linha 3');
            break;
        case (props.clickedIndexes.includes(16) && props.clickedIndexes.includes(17) && props.clickedIndexes.includes(18) && props.clickedIndexes.includes(19) && props.clickedIndexes.includes(20)):
            console.log('Linha 4');
            break;
        case (props.clickedIndexes.includes(21) && props.clickedIndexes.includes(22) && props.clickedIndexes.includes(23) && props.clickedIndexes.includes(24) && props.clickedIndexes.includes(25)):
            console.log('Linha 5');
            break;
        //
        case (props.clickedIndexes.includes(1) && props.clickedIndexes.includes(6) && props.clickedIndexes.includes(11) && props.clickedIndexes.includes(16) && props.clickedIndexes.includes(21)):
            console.log('Coluna 1');
            break;
        case (props.clickedIndexes.includes(2) && props.clickedIndexes.includes(7) && props.clickedIndexes.includes(12) && props.clickedIndexes.includes(17) && props.clickedIndexes.includes(22)):
            console.log('Coluna 2');
            break;
        case (props.clickedIndexes.includes(3) && props.clickedIndexes.includes(8) && props.clickedIndexes.includes(13) && props.clickedIndexes.includes(18) && props.clickedIndexes.includes(23)):
            console.log('Coluna 3');
            break;
        case (props.clickedIndexes.includes(4) && props.clickedIndexes.includes(9) && props.clickedIndexes.includes(14) && props.clickedIndexes.includes(19) && props.clickedIndexes.includes(24)):
            console.log('Coluna 4');
            break;
        case (props.clickedIndexes.includes(5) && props.clickedIndexes.includes(10) && props.clickedIndexes.includes(15) && props.clickedIndexes.includes(20) && props.clickedIndexes.includes(25)):
            console.log('Coluna 5');
            break;
        //
        case (props.clickedIndexes.includes(1) && props.clickedIndexes.includes(7) && props.clickedIndexes.includes(13) && props.clickedIndexes.includes(19) && props.clickedIndexes.includes(25)):
            console.log('DIAGONAL 1');
            break;
        case (props.clickedIndexes.includes(5) && props.clickedIndexes.includes(9) && props.clickedIndexes.includes(13) && props.clickedIndexes.includes(17) && props.clickedIndexes.includes(21)):
            console.log('DIAGONAL 2');
            break;
        default:
            console.log('NO');
    }


    return (
        <div>
LOL
        </div>
    );
};

export default Checkwinner;
