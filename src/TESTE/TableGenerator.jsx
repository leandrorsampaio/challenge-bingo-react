import React from 'react';
import TableData from './TableData.json';

const TableGenerator = () => {
  
  const rows = [];

  for (let i = 0; i < 25; i++) {

    const item = TableData[i];

    // Skip the element at index 5
    if (i === 5) {
      continue;
    }

    const idStyle = i === 6 ? { color: 'red' } : {};

    rows.push(

      /* Check if item is falsy */
      item && (
        <td key={item.id}>
          <div style={idStyle}>ID: {item.id}</div>
          <div>Name: {item.name}</div>
        </td>
      )
    );
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableGenerator;