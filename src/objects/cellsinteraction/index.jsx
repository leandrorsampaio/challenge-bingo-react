import React, { useState } from "react";
import './style.scss'

const Cellsinteraction = () => {

    const [hoverRef, isHovered] = useHover();
    return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;

    return (
        <div>
            OI
        </div>
    );
};

export default Cellsinteraction;
