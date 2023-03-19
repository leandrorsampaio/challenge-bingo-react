import React from 'react';

const Refreshpage = () => {

    const handleClickRefresh = () => {
        window.location.reload();
    };

    return (
        <>
            <button onClick={handleClickRefresh}>
                Refresh
            </button>
        </>
    );
};

export default Refreshpage;
