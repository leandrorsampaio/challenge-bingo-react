import React, { useState } from "react";
import './style.scss'

function NameForm() {

  
  const [firstName, setFirstName] = useState('');
  const [userPosition, setUserPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const profileNameDivs = document.querySelectorAll(".js-profileName");
    const profilePositionImgs = document.querySelectorAll(".js-profilePosition");
    const profileLayerDiv = document.querySelectorAll(".js-profileLayer");

    profileNameDivs.forEach((div) => {
      div.textContent = firstName;
    });


    profilePositionImgs.forEach((image) => {
      image.textContent = userPosition;
      var newSrc = "../../assets/images/chars/char-2.png";
      image.setAttribute("src", newSrc);
    });
   

    profileLayerDiv.forEach((div) => {
      div.remove();
    });

  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSetUserPosition = (event) => {
    setUserPosition(event.target.value);
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
                className="inputText profileLayer__inputText"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
          </div>

          <div className="profileLayer__formLine">

            <p className="profileLayer__text">Your position: </p>
            
            <label>
              <img className="header__charImage" src={require('../../assets/images/chars/char-1.png')} alt="Intern Pixel Art" />
              <p className="profileLayer__textPosition">Project Manager</p>
            </label>
            <input type="radio" id="char_choice_1" name="char_choice" value="1" checked={userPosition === '1'} onChange={handleSetUserPosition} />
            

            <label>
              <img className="header__charImage" src={require('../../assets/images/chars/char-2.png')} alt="Intern Pixel Art" />
              <p className="profileLayer__textPosition">Developer</p>
            </label>
            <input type="radio" id="char_choice_2" name="char_choice" value="2" checked={userPosition === '2'} onChange={handleSetUserPosition} />

            <label>
              <img className="header__charImage" src={require('../../assets/images/chars/char-3.png')} alt="Intern Pixel Art" />
              <p className="profileLayer__textPosition">Designer</p>
            </label>
            <input type="radio" id="char_choice_3" name="char_choice" value="3" checked={userPosition === '3'} onChange={handleSetUserPosition} />

            <label>
              <img className="header__charImage" src={require('../../assets/images/chars/char-3.png')} alt="Intern Pixel Art" />
              <p className="profileLayer__textPosition">QA Test Engineer</p>
            </label>
            <input type="radio" id="char_choice_4" name="char_choice" value="4" checked={userPosition === '4'} onChange={handleSetUserPosition} />
          
          </div>





          <button className="button profileLayer__button" type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default NameForm;