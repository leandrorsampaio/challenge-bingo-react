import React from 'react';

import MyProvider from './objects/usercontextprovider';
import MyConsumer from './objects/usercontentlayer';
import Headerpage from './objects/headerpage';
import Cellsinteraction from './objects/cellsinteraction';
import Footerpage from './objects/footerpage';


function App() {

  return (
    <>

      <MyProvider>
        
        <MyConsumer />

        <Headerpage />

        <Cellsinteraction />

        <Footerpage />

      </MyProvider>

    </>

  );
}

export default App;
