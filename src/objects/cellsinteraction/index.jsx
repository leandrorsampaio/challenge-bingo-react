import React, { useState } from "react";
import Bingocard from '../bingocard';
import Checkwinner from '../checkwinner';
import './style.scss'

const Cellsinteraction = (props) => {


    const [activeIndex, setActiveIndex] = useState(-1);
    const [clickedIndexes, setClickedIndexes] = useState([]);

    function handleClick(index) {

        setActiveIndex(index);

        setClickedIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });

    }


    return (
        <div>
            <Bingocard
                activeIndex={activeIndex}
                clickedIndexes={clickedIndexes}
                onClick={handleClick}
            />

            <Checkwinner clickedIndexes={clickedIndexes} />

            <div>Clicked Indexes: {clickedIndexes.join(', ')}</div>


        </div>
    );
};

export default Cellsinteraction;
