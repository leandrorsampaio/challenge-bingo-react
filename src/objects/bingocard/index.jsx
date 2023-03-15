import React, { useState } from "react";
import TableData from '../../assets/data/BoardData.json';
import './style.scss'

const Bingocard = () => {

    const rows = [];
    const [btnState, setBtnState] = useState(false);

    function handleClick(i) {
        setBtnState(btnState => !btnState);
        console.log(i);
    }

    let toggleBtnClass = btnState ? ' active' : '';


    for (let i = 0; i < 25; i++) {

        let item = TableData[i];
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
                    onClick={() => handleClick(i)}
                    className={'bingoCard__cell --' + i + defineLine + defineColumn + defineDiagonal + toggleBtnClass} 
                    key={item.id}>
                    <p className='bingoCard__text'>
                        {cellBingo ? 'Bingo' : item.name}
                    </p>
                </div>
            )
        );


    }

    return (
        <div className='bingoCard'>
            {rows}
        </div>
    );
};

export default Bingocard;