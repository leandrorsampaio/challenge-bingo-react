import React from "react";
import './style.scss'

const Gifswinner = (props) => {

    return (
        <>
           <img className="gifswinner--danceCar" src={require('../../assets/images/winner/cat-dance.gif')} alt="Cat dance gif" />
           <img className="gifswinner--hireMe" src={require('../../assets/images/winner/hire-me.gif')} alt="Cat dance gif" />
           <img className="gifswinner--postIt" src={require('../../assets/images/winner/post-it.gif')} alt="Cat dance gif" />
        </>
    );
};

export default Gifswinner;
