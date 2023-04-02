import React from 'react';

import MyProvider from './objects/AA_MyProvider';
import MyConsumer from './objects/AA_MyConsumer';


import Profilelayer from './objects/profilelayer';
import Headerpage from './objects/headerpage';
import Cellsinteraction from './objects/cellsinteraction';
import Footerpage from './objects/footerpage';




function App() {


  return (
    <>

      <MyProvider>
        
        <MyConsumer />
      
        <Profilelayer />

        <Headerpage />

        <Cellsinteraction />

        <Footerpage />

      </MyProvider>

    </>

  );
}

export default App;
