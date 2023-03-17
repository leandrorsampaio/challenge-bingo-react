import React, { useState, useEffect } from "react";
import './style.scss'

function Checkwinner() {
  const [lolCount, setLolCount] = useState(0);
  const [mmmCount, setMmmCount] = useState(0);

  useEffect(() => {
    const lolDivs = document.querySelectorAll(".--line1");
    const mmmDivs = document.querySelectorAll(".active");
    setLolCount(lolDivs.length);
    setMmmCount(mmmDivs.length);

    // Add listener for changes to the DOM
    const mutationObserver = new MutationObserver(() => {
      const updatedLolDivs = document.querySelectorAll(".--line1");
      const updatedMmmDivs = document.querySelectorAll(".active");
      setLolCount(updatedLolDivs.length);
      setMmmCount(updatedMmmDivs.length);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => mutationObserver.disconnect();
  }, []);

  return (
    <div>
      <p>Number of divs with class .lol: {lolCount}</p>
      <p>Number of divs with class .mmm: {mmmCount}</p>
    </div>
  );
}

export default Checkwinner;