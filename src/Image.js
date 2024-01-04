import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BatchUpdate.css';

function Image() {
    let navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setSelectedImage(e.target.files[0]);

            // Create a URL for the selected file
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setImagePreviewUrl(imageUrl);
        }
    };

    const handleHomeClick = () => {
        navigate('/batchUpdate');
    };

    const handleSignOutClick = () => {
        navigate('/');
    };

    const handleCaptureClick = () => {
      if (selectedImage) {
          navigate('/DataDisplay');
      } else {
          alert('Please upload a photo first.');
      }
  };

    const handleCancel = () => {
        navigate('/batchUpdate');
    };

    const handleImageUpload = () => {
        // Logic to upload the image to a server
        console.log('Image to be uploaded:', selectedImage);
    };

    return (
        <div className="bUpdate-container">
            <div className="batch-update-container">
                <header className="header">
                    <span className="home" onClick={handleHomeClick}>Home</span>
                    <span className="logo">💎</span>
                    <span className="sign-out" onClick={handleSignOutClick}>Sign out</span>
                </header>

                <div className="box-section_Image">
                    <div className="content_Image">
                        <h1 className="title2">Upload a Photo</h1>
                        <div className='ImageField'>
                            <input type="file" onChange={handleImageChange} />
                            {selectedImage && (
                                <>
                                    {/* <button onClick={handleImageUpload}>Upload Image</button> */}
                                    <img src={imagePreviewUrl} alt="Preview" style={{ width: '535px', height: '500px' }}/>
                                </>
                            )}
                        </div>
                        <button className="batch-button new" onClick={handleCaptureClick}>Capture</button>
                        <button className="batch-button existing" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Image;
