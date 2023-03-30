import React from 'react';
import './style.scss'

const Refreshpage = () => {

    const handleClickRefresh = () => {
        window.location.reload();
    };

    return (
        <>
            <div className='refreshPageControl'>            
                <button className='button' onClick={handleClickRefresh}>
                    Get a new Bingo Card
                </button>
            </div>
        </>
    );
};

export default Refreshpage;
