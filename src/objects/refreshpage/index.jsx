import React from 'react';
import './style.scss'

const Refreshpage = (props) => {

    const handleClickRefresh = () => {
        window.location.reload();
    };

    return (
        <>
            <div className={'refreshPageControl ' + props.buttonClass}>
                <button className='button' onClick={handleClickRefresh}>
                    {props.buttonText}
                </button>
            </div>
        </>
    );
};

export default Refreshpage;
