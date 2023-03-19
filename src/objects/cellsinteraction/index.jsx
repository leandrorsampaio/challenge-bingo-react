import React, { useState } from "react";
import Bingocard from '../bingocard';
import Checkwinner from '../checkwinner';
import './style.scss'

const Cellsinteraction = (props) => {


    const [activeIndex, setActiveIndex] = useState(-1);
    const [clickedIndexes, setClickedIndexes] = useState([]);



    function handleClick(index) {

        if(!index.target) {

            // set the last item clicked only
            setActiveIndex(index);

            setClickedIndexes((prevIndexes) => {
                if (prevIndexes.includes(index)) {
                    return prevIndexes.filter((i) => i !== index);
                } else {
                    return [...prevIndexes, index];
                }
            });

        } else {
            
            if (index.target.classList.contains('js-cleanUpCard')) {
                setClickedIndexes((prevIndexes) => {
                    return [];
                });
            }
        }

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

            <button className="js-cleanUpCard" onClick={handleClick}>
                Clean Up Bingo Card
            </button>

        </div>
    );
};

export default Cellsinteraction;
