import React, { useState } from "react";
import TableData from '../../assets/data/BoardData.json';
import './style.scss'


const Bingocard = (props) => {


    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const shuffledData = shuffleArray(TableData);
    const [activeIndexMM] = useState(shuffledData);
    const rows = [];
   
    for (let i = 0; i < 25; i++) {

        let item = activeIndexMM[i];
        let defineLine = '';
        let defineColumn = '';
        let defineDiagonal = '';
        let cellBingo = false;

        switch (true) {
            case (i === 0 || i === 1 || i === 2 || i === 3 || i === 4):
                defineLine = ' --line1';
                break;
            case (i === 5 || i === 6 || i === 7 || i === 8 || i === 9):
                defineLine = ' --line2';
                break;
            case (i === 10 || i === 11 || i === 12 || i === 13 || i === 14):
                defineLine = ' --line3';
                break;
            case (i === 15 || i === 16 || i === 17 || i === 18 || i === 19):
                defineLine = ' --line4';
                break;
            case (i === 20 || i === 21 || i === 22 || i === 23 || i === 24):
                defineLine = ' --line5';
                break;
            default:
                defineLine = '';
        }

        switch (true) {
            case (i === 0 || i === 5 || i === 10 || i === 15 || i === 20):
                defineColumn = ' --column1';
                break;
            case (i === 1 || i === 6 || i === 11 || i === 16 || i === 21):
                defineColumn = ' --column2';
                break;
            case (i === 2 || i === 7 || i === 12 || i === 17 || i === 22):
                defineColumn = ' --column3';
                break;
            case (i === 3 || i === 8 || i === 13 || i === 18 || i === 23):
                defineColumn = ' --column4';
                break;
            case (i === 4 || i === 9 || i === 14 || i === 19 || i === 24):
                defineColumn = ' --column5';
                break;
            default:
                defineColumn = '';
        }

        switch (true) {
            case (i === 0 || i === 6 || i === 18 || i === 24):
                defineDiagonal = ' --diagonal1';
                break;
            case (i === 4 || i === 8 || i === 16 || i === 20):
                defineDiagonal = ' --diagonal2';
                break;
            case (i === 12):
                defineDiagonal = ' --diagonal1 --diagonal2';
                break;
            default:
                defineDiagonal = '';
        }

        // Specel bingo cell
        if (i === 12) {
            cellBingo = true;
        }

        rows.push(
            /* Check if item is falsy */
            item && (
                <div
                    className={'bingoCard__cell --' + i + defineLine + defineColumn + defineDiagonal + (cellBingo ? ' active' : '') + (props.clickedIndexes.includes(i+1) ? ' active' : '') + (props.activeIndex === i+1 ? ' last-clicked' : '')} 
                    key={i+1}
                    onClick={() => props.onClick(i+1)}>
                    <p className='bingoCard__text'>
                        {cellBingo ? 'Bingo' : item.name} 
                        {props.clickedIndexes.includes(i+1) ? ' X' : ''}
                    </p>
                </div>
            )
        );


    }

    return (
        <div className={'bingoCard'}>
            {rows}
        </div>
    );
};

export default Bingocard;