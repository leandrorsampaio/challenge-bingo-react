import React, { useState } from 'react';
import Refreshpage from './../refreshpage';
import './style.scss'

const Gifswinner = (props) => {

    const [setValue] = useState('');
    function handleValueChange(newValue) {
        setValue(newValue);
    }

    return (
        <>
           <img className="gifswinner --danceCat" src={require('../../assets/images/winner/cat-dance.gif')} alt="Cat dance gif" />
           <img className="gifswinner --hireMe" src={require('../../assets/images/winner/hire-me.gif')} alt="Cat dance gif" />
           <img className="gifswinner --postIt" src={require('../../assets/images/winner/post-it.gif')} alt="Cat dance gif" />

           <Refreshpage onValueChange={handleValueChange} />

        </>
    );
};

export default Gifswinner;
