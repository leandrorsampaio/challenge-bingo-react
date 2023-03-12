import React from 'react';
import TableData from './TableData.json';

const TableGenerator = () => {

  return (
    
    <table>
      <tbody>
        {[...Array(4)].map((_, i) => (
          <tr key={i}>
            {[...Array(5)].map((_, j) => {
              const index = i * 5 + j;
              const item = TableData[index];
              return (
                <td key={j}>
                  {item && (
                    <>
                      <div>ID: {item.id}</div>
                      <div>Name: {item.name}</div>
                    </>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableGenerator;