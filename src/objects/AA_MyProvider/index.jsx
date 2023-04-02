import React, { useState } from 'react';
import MyContext from '../AA_MyContext';

function MyProvider(props) {
  const [data, setData] = useState('initial data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;