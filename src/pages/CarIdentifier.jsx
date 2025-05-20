import React, { useState } from 'react';
import '../styles/pages/CarIdentifier.css';

export default function Identify() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPrediction(null);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPrediction(data.predictions[0]);
    } catch (err) {
      console.error('Prediction error:', err);
      setPrediction({ tagName: 'Error', probability: 0 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="identify-container">
      <h1>Car Identifier</h1>
      <p>Identify your car with just a photo</p>

      <form onSubmit={handleSubmit}>
        <div className="upload-container">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" />
          </div>
        )}

        <button className="cta-button" type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Identify Car'}
        </button>
      </form>

      {prediction && (
        <div className="prediction-container">
          <h2>Prediction</h2>
          <p>{prediction.tagName} — {(prediction.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}
  