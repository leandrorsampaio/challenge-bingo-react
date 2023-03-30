import React, { useState } from 'react';
import Headerpage from './objects/headerpage';
import Cellsinteraction from './objects/cellsinteraction';
import Refreshpage from './objects/refreshpage';


function App() {


  const [setValue] = useState('');

  function handleValueChange(newValue) {
    setValue(newValue);
  }


  return (
    <>

      <Headerpage />

      <Cellsinteraction />

      <Refreshpage onValueChange={handleValueChange} />

    </>

  );
}

export default App;
