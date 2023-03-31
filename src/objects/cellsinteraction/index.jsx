import React, { useState } from "react";
import Bingocard from '../bingocard';
import Checkwinner from '../checkwinner';
import './style.scss'

const Cellsinteraction = () => {


    const [activeIndex, setActiveIndex] = useState(-1);
    const [clickedIndexes, setClickedIndexes] = useState([]);
    const [newBingoCard, setNewBingoCard] = useState(false);

    
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

            setNewBingoCard(false);


        } else {
            
            if (index.target.classList.contains('js-cleanUpCard')) {
                setClickedIndexes(() => {
                    return [];
                });

                setNewBingoCard(true);
                setTimeout(function() {
                    setNewBingoCard(false);
                }, 1000);



            }
        }

    }




    return (

        <>

            <div className="bigoCardSection">

                {!newBingoCard ? (
                    <Bingocard
                        activeIndex={activeIndex}
                        clickedIndexes={clickedIndexes}
                        onClick={handleClick}
                        />
                ) : (
                    <div>Transition useEffect to a new card</div>
                )}

                <div className="hiddenElement">Clicked Indexes: {clickedIndexes.join(', ')}</div>
                <button className="js-cleanUpCard hiddenElement" onClick={handleClick}>
                    Clean Up Bingo Card
                </button>

            </div>
            
            <Checkwinner clickedIndexes={clickedIndexes} />

        </>
    );
};

export default Cellsinteraction;
