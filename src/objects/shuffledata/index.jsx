import React from "react";
import TableData from '../../assets/data/BoardData.json';


// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Shuffledata() {
  // Shuffle the data array
  const shuffledData = shuffleArray(TableData);

  // Render the shuffled data
  return (
    shuffledData
  );
}

export default Shuffledata;