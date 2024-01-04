import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BatchUpdate.css';

function Certificate() {
  const [id, setId] = useState('ADC852600');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submit logic for ID
    console.log(id);
  };

  const handleHomeClick = () => {
    navigate('/batchUpdate');
  };

  const handleSignOutClick = () => {
    navigate('/');
  };

  const handleClickConfirm = () => {
    navigate('/BatchQueue');
  };

  const handleCancel = () => {
    navigate('/IDGenerationForm');
  };
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const labelStyle = {
    marginRight: '10px',
    width: '100px'
  };

  const inputStyle = {
    padding: '8px',
    marginRight: '20px',
    flex: '1'
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginRight: '10px'
  };

  return (
    <div className="bUpdate-container">
    <div className="batch-update-container">
      <header className="header">
        <span className="home" onClick={handleHomeClick}>Home</span>
        <span className="logo">💎</span>
        <span className="sign-out" onClick={handleSignOutClick}>Sign out</span>
      </header>

      <div className="box-section_Certificate">
        <div className="content_Certificate">
        <h1 className="title2">Certificate</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            {/* Static data */}
            <div style={rowStyle}>
                <label style={labelStyle}>Gem Type:</label>
                <span>BS</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Company:</label>
                <span>R+R</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Carat:</label>
                <span>2.55</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Seller:</label>
                <span>ADSASN</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>SalesPrice:</label>
                <span>850</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Dimensions:</label>
                <span>9.1x6.4</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Shape:</label>
                <span>OV</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>Count:</label>
                <span>150</span>
            </div>
            <div style={rowStyle}>
                <label style={labelStyle}>ID:</label>
                <input
                type="text"
                name="id"
                value={id}
                onChange={handleChange}
                style={inputStyle}
                />
            </div>
            </form>
        </div>
        <button className="batch-button new" onClick={handleClickConfirm}>Confirm</button>
        <button className="batch-button existing" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
    </div>
  );
}

export default Certificate;
