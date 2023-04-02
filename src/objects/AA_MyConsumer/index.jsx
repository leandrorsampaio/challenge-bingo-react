import React, { useState, useContext } from 'react';
import MyContext from '../AA_MyContext';
import './style.scss'

function MyConsumer() {

    const { data, setData } = useContext(MyContext);
    const [inputData, setInputData] = useState('');
    const [companyRole, setCompanyRole] = useState('Manager');
    const profileLayerDiv = document.querySelectorAll(".js-profileLayer");

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ ...data, inputData, companyRole });
        setInputData('');

        profileLayerDiv.forEach((div) => {
            div.remove();
        });
    };

    return (


        <div className="profileLayer js-profileLayer">
            <div className="profileLayer__form">
                <h1 className="profileLayer__title">Welcome to Call Bingo!</h1>


                <form onSubmit={handleSubmit}>

                    <div className="profileLayer__formLine">
                        <label>
                            <p className="profileLayer__text">Your name: </p>
                            <input
                                type="text"
                                className="inputText profileLayer__inputText"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="profileLayer__formLine">
                        <p className="profileLayer__text">Your Role/Position: </p>
                        <label className='profileLayer__formRadioItem'>
                            <input
                                name="companyrole"
                                type="radio"
                                value="Manager"
                                checked={companyRole === 'Manager'}
                                onChange={(e) => setCompanyRole(e.target.value)}
                            />
                            <img className="profileLayer__charImage" src={require('../../assets/images/chars/char-1.png')} alt="Intern Pixel Art" />
                            <p className="profileLayer__textPosition">Project Manager</p>
                        </label>
                        <label className='profileLayer__formRadioItem'>
                            <input
                                name="companyrole"
                                type="radio"
                                value="Developer"
                                checked={companyRole === 'Developer'}
                                onChange={(e) => setCompanyRole(e.target.value)}
                            />
                            <img className="profileLayer__charImage" src={require('../../assets/images/chars/char-2.png')} alt="Intern Pixel Art" />
                            <p className="profileLayer__textPosition">Developer</p>
                        </label>
                        <label className='profileLayer__formRadioItem'>
                            <input
                                name="companyrole"
                                type="radio"
                                value="Designer"
                                checked={companyRole === 'Designer'}
                                onChange={(e) => setCompanyRole(e.target.value)}
                            />
                            <img className="profileLayer__charImage" src={require('../../assets/images/chars/char-3.png')} alt="Intern Pixel Art" />
                            <p className="profileLayer__textPosition">Designer</p>
                        </label>
                        <label className='profileLayer__formRadioItem'>
                            <input
                                name="companyrole"
                                type="radio"
                                value="QA Tester"
                                checked={companyRole === 'QA Tester'}
                                onChange={(e) => setCompanyRole(e.target.value)}
                            />
                            <img className="profileLayer__charImage" src={require('../../assets/images/chars/char-4.png')} alt="Intern Pixel Art" />
                            <p className="profileLayer__textPosition">QA Tester</p>
                        </label>
                    </div>

                    <button className="button profileLayer__button" type="submit">Start Bingo</button>
                </form>


            </div>
        </div>
    );
}

export default MyConsumer;