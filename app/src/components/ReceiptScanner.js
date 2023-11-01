import React, { useState } from 'react';
import { uploadImage } from '../services/api';

function ReceiptScanner() {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageData = await uploadImage(file);
    setImage(imageData);
  };

  return (
    <div>
      <input type='file' onChange={handleImageUpload} />
      {image && <img src={image} alt='Receipt' />}
    </div>
  );
}

export default ReceiptScanner;