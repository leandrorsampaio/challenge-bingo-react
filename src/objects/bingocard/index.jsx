import React, { useState, useEffect } from "react";
import TableData from '../../assets/data/BoardData.json';
import './style.scss'

const Bingocard = () => {

    const rows = [];
    const [btnState, setBtnState] = useState(false);

    function handleClickConatainer() {
        setBtnState(btnState => !btnState);
        //setBtnState(i === btnState ? true : false)


        /*
        const cellsLine1 = document.querySelectorAll(".--line1");
        const cellsLine2 = document.querySelectorAll(".--line2");
        const cellsLine3 = document.querySelectorAll(".--line3");
        const cellsLine4 = document.querySelectorAll(".--line4");
        const cellsLine5 = document.querySelectorAll(".--line5");
        const cellsColumn1 = document.querySelectorAll(".--column1");
        const cellsColumn2 = document.querySelectorAll(".--column2");
        const cellsColumn3 = document.querySelectorAll(".--column3");
        const cellsColumn4 = document.querySelectorAll(".--column4");
        const cellsColumn5 = document.querySelectorAll(".--column5");
        const cellsDiagonal1 = document.querySelectorAll(".--diagonal1");
        const cellsDiagonal2 = document.querySelectorAll(".--diagonal2");
        */




        const allBingoCardCells = document.querySelectorAll(".bingoCard__cell");

        if (allBingoCardCells) {
          console.log("Element found:", allBingoCardCells);
        } else {
          console.log("Element not found");
        }

        let countLine = 0;
        let countColumn = 0;
        let countDiagonal = 0;
        let userWon = false;

        for (let i = 0; i < allBingoCardCells.length; i++) {
            
            let itemClassList = allBingoCardCells[i].classList;

            if (
                (itemClassList.contains('--line1') && itemClassList.contains('active')) ||
                (itemClassList.contains('--line2') && itemClassList.contains('active')) ||
                (itemClassList.contains('--line3') && itemClassList.contains('active')) ||
                (itemClassList.contains('--line4') && itemClassList.contains('active')) ||
                (itemClassList.contains('--line5') && itemClassList.contains('active')) ||
                (itemClassList.contains('--column1') && itemClassList.contains('active')) ||
                (itemClassList.contains('--column2') && itemClassList.contains('active')) ||
                (itemClassList.contains('--column3') && itemClassList.contains('active')) ||
                (itemClassList.contains('--column4') && itemClassList.contains('active')) ||
                (itemClassList.contains('--column5') && itemClassList.contains('active')) ||
                (itemClassList.contains('--diagonal1') && itemClassList.contains('active')) ||
                (itemClassList.contains('--diagonal2') && itemClassList.contains('active'))
            ) {
                countLine++;
                if (countLine === 5) {
                    userWon = true;
                }
            }

        }
        
        console.log(countLine);
        console.log(userWon);
        
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
                    className={'bingoCard__cell --' + i + defineLine + defineColumn + defineDiagonal + (cellBingo ? ' active' : '')} 
                    key={item.id}>
                    <p className='bingoCard__text'>
                        {cellBingo ? 'Bingo' : item.name}
                    </p>
                </div>
            )
        );


    }

    return (
        <div className={'bingoCard' + toggleBtnClass } onClick={() => handleClickConatainer()}>
            {rows}
        </div>
    );
};

export default Bingocard;