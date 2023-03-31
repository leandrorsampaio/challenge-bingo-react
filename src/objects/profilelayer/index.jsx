import React, { useState } from "react";
import './style.scss'

function NameForm() {

  const [firstName, setFirstName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const profileNameDivs = document.querySelectorAll(".js-profileName");
    const profileLayerDiv = document.querySelectorAll(".js-profileLayer");

    profileNameDivs.forEach((div) => {
      div.textContent = firstName;
    });

    profileLayerDiv.forEach((div) => {
      div.remove();
    });

  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };


  return (

    <div className="profileLayer js-profileLayer">
      <div className="profileLayer__form">
        <h1 className="profileLayer__title">Welcome to Call Bingo!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p className="profileLayer__text">Your name: </p>
            <input
              className="inputText profileLayer__inputText"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <button className="button profileLayer__button" type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default NameForm;