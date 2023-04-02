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

            setClickedIndexes(() => {
                return [];
            });

            setNewBingoCard(true);
            setTimeout(function() {
                setNewBingoCard(false);
            }, 1000);

        }

    }




    return (

        <>

            

            <div className="bigoCardSection">

                
                <div className="bigoCardSection__buttonWrapper">
                    <button className="button" onClick={handleClick}>
                        Get a New Bingo Card
                    </button>
                </div>


                {!newBingoCard ? (
                    <Bingocard
                        activeIndex={activeIndex}
                        clickedIndexes={clickedIndexes}
                        onClick={handleClick}
                        />
                ) : (
                    <div>Transition useEffect to a new card</div>
                )}


                <div>Transition useEffect to a new card</div>



                <div className="hiddenElement">Clicked Indexes: {clickedIndexes.join(', ')}</div>

                

            </div>
            
            <Checkwinner clickedIndexes={clickedIndexes} />

        </>
    );
};

export default Cellsinteraction;
