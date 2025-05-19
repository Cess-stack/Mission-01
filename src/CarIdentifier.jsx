import React, { useState } from 'react';
import './CarIdentifier.css';   

export default function CarIdentifier() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPrediction(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.predictions[0]);
    } catch (err) {
      console.error(err);
      setPrediction({ tagName: 'Error', probability: 0 });
    } finally {
      setLoading(false);
    }
  };    
  
  return (
    <div>
      <h1>Car Identifier</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">
          {loading ? 'Predicting...' : 'Identify Car'}
        </button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction</h2>
          <p>
            <strong>{prediction.tagName}</strong> —{' '}
            {(prediction.probability * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}
