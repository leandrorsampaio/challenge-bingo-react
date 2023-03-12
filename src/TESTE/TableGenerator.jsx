import React from 'react';

const Data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Mary' },
  { id: 5, name: 'David' },
  { id: 6, name: 'Lisa' },
  { id: 7, name: 'Mike' },
  { id: 8, name: 'Samantha' },
  { id: 9, name: 'Tim' },
  { id: 10, name: 'Sarah' },
  { id: 11, name: 'Peter' },
  { id: 12, name: 'Anna' },
  { id: 13, name: 'Michael' },
  { id: 14, name: 'Alex' },
  { id: 15, name: 'Karen' },
  { id: 16, name: 'Mark' },
  { id: 17, name: 'Emily' },
  { id: 18, name: 'Chris' },
  { id: 19, name: 'Julia' },
  { id: 20, name: 'Daniel' },
];

const Table = ({ data }) => {
  return (
    <table>
      <tbody>

        {/* 
            creates a new array with 4 empty elements (i.e., [undefined, undefined, undefined, undefined]). 
            The spread operator ... is used to convert the array-like object returned by Array(4) into an actual array.    
        */}
        {[...Array(4)].map((_, i) => (

          <tr key={i}>
            {[...Array(5)].map((_, j) => {
              const index = i * 5 + j;
              const item = data[index];
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

const TableGenerator = () => {
  return <Table data={Data} />;
};

export default TableGenerator;