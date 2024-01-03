import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BatchUpdate.css';

const BatchQueue = () => {
    let navigate = useNavigate();
    const handleNewBatchClick = () => {
        navigate('/Image');
      };
      const handleHomeClick = () => {
        navigate('/batchUpdate');
      };
      const handleSignOutClick = () => {
        navigate('/');
      };
      const batchIds = [
        'ADC852600',
        'CEB1546326',
        'CBC654600',
        'ABE653502',
        'FDA574600',
        'DFA6153200',
        'BED2132100',
        'ADE132465',
        'CEA349656'
      ];
    

  return (
    <div className="batch-update-container">
      <header className="header">
        <span className="home" onClick={handleHomeClick}>Home</span>
        <span className="logo">💎</span>
        <span className="sign-out" onClick={handleSignOutClick}>Sign out</span>
      </header> 
      <div className="content">
        <div className="batch-queue">
        <h2>Batch Queue</h2>
        <ul>
            {batchIds.map((batchId) => (
            <li key={batchId}>
                {batchId}
            </li>
            ))}
        </ul>
        </div>
        {/* <button style={{backgroundColor:"white" ,color:"black"}} className="batch-button new" onClick={handleHomeClick}>Return to Home page</button> */}
        <button className="batch-button existing" onClick={handleHomeClick}>Return to Home page</button>
      </div>
    </div>
  );
}

export default BatchQueue;
