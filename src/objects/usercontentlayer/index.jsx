import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../usercontext';
import imgCharMichael from '../../assets/images/chars/char-1.png';
import imgCharJim from '../../assets/images/chars/char-2.png';
import imgCharPam from '../../assets/images/chars/char-3.png';
import imgCharDwight from '../../assets/images/chars/char-4.png';
import './style.scss'

function MyConsumer() {

    const { data, setData } = useContext(MyContext);
    const [inputData, setInputData] = useState('');
    const [companyRole, setCompanyRole] = useState('Manager');
    const profileLayerDiv = document.querySelectorAll(".js-profileLayer");
    const colorVar = companyRole.replace(/\s+/g, '_');

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ ...data, inputData, companyRole });
        setInputData('');

        profileLayerDiv.forEach((div) => {
            div.remove();
        });
    };

    useEffect(() => {
        document.body.classList.add(colorVar);

        return () => {
          document.body.classList.remove(colorVar);
        };
      });

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
                                maxLength="20"
                                className="inputText profileLayer__inputText"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className={'profileLayer__formLine --radioLine'  + colorVar}>
                        <p className="profileLayer__text">Your Role/Position: </p>
                        <label className='profileLayer__formRadioItem'>
                            <input
                                name="companyrole"
                                type="radio"
                                value="Manager"
                                checked={companyRole === 'Manager'}
                                onChange={(e) => setCompanyRole(e.target.value)}
                            />
                            <img className="profileLayer__charImage --Manager" src={imgCharMichael} alt="Intern Pixel Art" />
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
                            <img className="profileLayer__charImage --Developer" src={imgCharJim} alt="Intern Pixel Art" />
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
                            <img className="profileLayer__charImage --Designer" src={imgCharPam} alt="Intern Pixel Art" />
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
                            <img className="profileLayer__charImage --imgQA" src={imgCharDwight} alt="Intern Pixel Art" />
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