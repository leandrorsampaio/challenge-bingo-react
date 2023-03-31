import React, { useState } from 'react';
import Headerpage from './objects/headerpage';
import Cellsinteraction from './objects/cellsinteraction';
import Refreshpage from './objects/refreshpage';
import Footerpage from './objects/footerpage';



function App() {


  const [setValue] = useState('');

  function handleValueChange(newValue) {
    setValue(newValue);
  }


  return (
    <>

      <Headerpage />

      <Cellsinteraction />

      <Refreshpage onValueChange={handleValueChange} buttonText={'Get a New Bingo Card'} buttonClass={'--mainCard'} />

      <Footerpage />

    </>

  );
}

export default App;
