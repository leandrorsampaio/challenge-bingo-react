import React, { useState } from "react";
import Bingocard from '../bingocard';
import Checkwinner from '../checkwinner';
import './style.scss'

const Cellsinteraction = (props) => {


    const [activeIndex, setActiveIndex] = useState(-1);
    const [clickedIndexes, setClickedIndexes] = useState([]);

    function handleClick(index) {

        //setActiveIndex(index);
        //console.log(index);

        setClickedIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });

    }






    switch (true) {
        case (clickedIndexes.includes(1) && clickedIndexes.includes(2) && clickedIndexes.includes(3) && clickedIndexes.includes(4) && clickedIndexes.includes(5)):
            console.log('Linha 1');
            break;
        case (clickedIndexes.includes(6) && clickedIndexes.includes(7) && clickedIndexes.includes(8) && clickedIndexes.includes(9) && clickedIndexes.includes(10)):
            console.log('Linha 2');
            break;
        case (clickedIndexes.includes(11) && clickedIndexes.includes(12) && clickedIndexes.includes(13) && clickedIndexes.includes(14) && clickedIndexes.includes(15)):
            console.log('Linha 3');
            break;
        case (clickedIndexes.includes(16) && clickedIndexes.includes(17) && clickedIndexes.includes(18) && clickedIndexes.includes(19) && clickedIndexes.includes(20)):
            console.log('Linha 4');
            break;
        case (clickedIndexes.includes(21) && clickedIndexes.includes(22) && clickedIndexes.includes(23) && clickedIndexes.includes(24) && clickedIndexes.includes(25)):
            console.log('Linha 5');
            break;

        case (clickedIndexes.includes(1) && clickedIndexes.includes(7) && clickedIndexes.includes(13) && clickedIndexes.includes(19) && clickedIndexes.includes(25)):
            console.log('DIAGONAL 1');
            break;
        case (clickedIndexes.includes(5) && clickedIndexes.includes(9) && clickedIndexes.includes(13) && clickedIndexes.includes(17) && clickedIndexes.includes(21)):
            console.log('DIAGONAL 2');
            break;
        default:
            console.log('NO');
    }





    return (
        <div>
            <Bingocard
                activeIndex={activeIndex}
                clickedIndexes={clickedIndexes}
                onClick={handleClick}
            />

            <Checkwinner />

            <div>Clicked Indexes: {clickedIndexes.join(', ')}</div>


        </div>
    );
};

export default Cellsinteraction;
