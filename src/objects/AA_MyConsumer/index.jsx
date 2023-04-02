import React, { useState, useContext } from 'react';
import MyContext from '../AA_MyContext';

function MyConsumer() {
    const { data, setData } = useContext(MyContext);
    const [inputData, setInputData] = useState('');
    const [companyRole, setCompanyRole] = useState('Manager');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setData({ ...data, inputData, companyRole });
      setInputData('');
    };
  
    return (
      <div>
        <p>Data: {JSON.stringify(data)}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Enter new data:
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </label>
          <div>
            Select your gender:
            <label>
              <input
                type="radio"
                value="Manager"
                checked={companyRole === 'Manager'}
                onChange={(e) => setCompanyRole(e.target.value)}
              />
              Manager
            </label>
            <label>
              <input
                type="radio"
                value="Developer"
                checked={companyRole === 'Developer'}
                onChange={(e) => setCompanyRole(e.target.value)}
              />
              Developer
            </label>
            <label>
              <input
                type="radio"
                value="Designer"
                checked={companyRole === 'Designer'}
                onChange={(e) => setCompanyRole(e.target.value)}
              />
              Designer
            </label>
            <label>
              <input
                type="radio"
                value="QA Tester"
                checked={companyRole === 'QA Tester'}
                onChange={(e) => setCompanyRole(e.target.value)}
              />
              QA Tester
            </label>
          </div>
          <button type="submit">Update Data</button>
        </form>
      </div>
    );
  }
  
  export default MyConsumer;