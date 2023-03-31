import React from 'react';
import './style.scss'

const HeaderPage = () => {


    return (
        <>


            
            <header className='header'>
                <div className='header__inner'>

                    <div className='header__logo'>
                        <p className='header__logoText'>CALL BINGO!</p>
                    </div>

                
                    <div className='header__profile'>
                        <img className="header__charImage" src={require('../../assets/images/chars/char-1.png')} alt="Intern Pixel Art" />
                        <div className='header__profileWrapper'>
                            <p className='header__profileText --name js-profileName'></p>
                            <p className='header__profileText --level'>"In a call"</p>
                        </div>
                    </div>

                    

                </div>
            </header>
        </>
    );
};

export default HeaderPage;
