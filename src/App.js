import React, { useState } from 'react';
import Cellsinteraction from './objects/cellsinteraction';
import Refreshpage from './objects/refreshpage';


function App() {


  const [setValue] = useState('');

  function handleValueChange(newValue) {
    setValue(newValue);
  }


  return (
    <>

      <Cellsinteraction />

      <Refreshpage onValueChange={handleValueChange} />

    </>

  );
}

export default App;
