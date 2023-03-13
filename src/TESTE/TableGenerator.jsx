import React from 'react';
import TableData from './TableData.json';

const TableGenerator = () => {
  
  const rows = [];

  for (let i = 0; i < 25; i++) {

    const item = TableData[i];
    //const idStyle = i === 6 ? { color: 'red' } : {};

    // Skip the element at index 5
    if (i === 12) {
      rows.push(
        /* Check if item is falsy */
        item && (
          <div className={'boardContainer__cell boardContainer__cell--' + i} key={item.id}>
            <div>BINGO</div>
          </div>
        )
      );
    } else {
      rows.push(
        /* Check if item is falsy */
        item && (
          <div className={'boardContainer__cell boardContainer__cell--' + i} key={item.id}>
            <div>Name: {item.name}</div>
          </div>
        )
      );
    }

  }

  return (
    <div className='boardContainer'>
      {rows}
    </div>
  );
};

export default TableGenerator;