import React, { useContext } from 'react';
import MyContext from '../usercontext';
import './style.scss'

const HeaderPage = () => {
    
    const { data } = useContext(MyContext);
    let imgCharUrl = '';


    if (data.companyRole === 'Manager') {
        imgCharUrl = require('../../assets/images/chars/char-1.png');
    } else if (data.companyRole === 'Developer') {
        imgCharUrl = require('../../assets/images/chars/char-2.png');
    } else if (data.companyRole === 'Designer') {
        imgCharUrl = require('../../assets/images/chars/char-3.png');
    } else {
        imgCharUrl = require('../../assets/images/chars/char-4.png');
    }


    return (
        <>
           
            <header className='header'>
                <div className='header__inner'>

                    <div className='header__logo'>
                        <p className='header__logoText'>CALL BINGO!</p>
                    </div>
                
                    <div className='header__profile'>
                        <img className="header__charImage" src={imgCharUrl} alt="Intern Pixel Art" />
                        <div className='header__profileWrapper'>
                            <p className='header__profileText --name js-profileName'>{data.inputData}</p>
                            <p className='header__profileText --level'>{data.companyRole}</p>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default HeaderPage;
