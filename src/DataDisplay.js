import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BatchUpdate.css';

function EditDataDisplay() {
    const [formData, setFormData] = useState({
        gemType: 'BS',
        company: 'R+R',
        carat: '2.55',
        seller: 'ADSASN',
        salesPrice: '850',
        dimensions: '9.1x6.4',
        shape: 'OV',
        count: '150'
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement submit logic
        console.log(formData);
      };
    
    let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    // Assuming only image
    setSelectedImage(e.target.files[0]);
  };
  const handleHomeClick = () => {
    navigate('/batchUpdate');
  };
  const handleSignOutClick = () => {
    navigate('/');
  };
  const hancleClickConfirm = () => {
    navigate('/IDGenerationForm');
  };
  const handleClickRetake = () => {
    navigate('/Image');
  };
  const handleCancel = () => {
    navigate('/Image');
  };
  const handleImageUpload = () => {
    // You would add the logic to upload the image to a server here
    console.log('Image to be uploaded:', selectedImage);
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
    <div className="batch-update-container">
      <header className="header">
        <span className="home" onClick={handleHomeClick}>Home</span>
        <span className="logo">💎</span>
        <span className="sign-out" onClick={handleSignOutClick}>Sign out</span>
      </header>

      <div className="content">
      <h1 className="title2">Edit Data</h1>
      <div className="content_Con">
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} style={rowStyle}>
          <label style={labelStyle}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      ))}
    </form>

      </div>
        <button className="batch-button new2" onClick={handleClickRetake}>Retake</button>
        <button className="batch-button new" onClick={hancleClickConfirm}>Confirm</button>
        <button className="batch-button existing" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default EditDataDisplay;
