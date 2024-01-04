import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './BatchUpdate.css';

const BatchUpdate = () => {
  useEffect(() => {
    // When the component mounts, add the no-scroll class to the body
    document.body.classList.add('no-scroll');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
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
      const handleExistingBatchClick = () => {
        navigate('/BatchQueue');
      };

  return (
    <div className='bUpdate-container'>
      <div className="batch-update-container">
        <header className="header">
          <span className="home" onClick={handleHomeClick}>Home</span>
          <span className="logo">💎</span>
          <span className="sign-out" onClick={handleSignOutClick}>Sign out</span>
        </header>
        <div className="box-section">
        <div className="content_batch_update">
          <h1 className="title">Batch Update</h1>
          <p className="subtitle">Select batch type</p>
          <button className="batch-button new" onClick={handleNewBatchClick}>New Batch</button>
          <button className="batch-button existing" onClick={handleExistingBatchClick}>Existing Batch</button>
        </div>
        </div> 
      </div>
    </div>
  );
}

export default BatchUpdate;
