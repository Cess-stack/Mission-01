import React, { useState } from 'react';

export default function Identify() {
   const [image, setImage] = useState(null);

   const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    //later: send to the backend
   };

   return (
    <div className="identify-page">
        <h1>Identify Car</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
            <img src={image} alt="Preview" />)}
    </div>
   );    
}
