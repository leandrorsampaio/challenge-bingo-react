import React, { useContext } from 'react';
import MyContext from '../AA_MyContext';
import './style.scss'

const HeaderPage = () => {
    
    const { data } = useContext(MyContext);

    return (
        <>
           
            <header className='header'>
                <div className='header__inner'>

                    <div className='header__logo'>
                        <p className='header__logoText'>CALL BINGO!</p>
                    </div>

                
                    <div className='header__profile'>
                        <img className="header__charImage js-profilePosition" src={require('../../assets/images/chars/char-1.png')} alt="Intern Pixel Art" />
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
