import React, { useState } from "react";
import "../styles/pages/CarIdentifier.css";

export default function Identify() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPrediction(null);
    setErrorMessage(null);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const data = await response.json();
      if (data.predictions && data.predictions.length > 0) {
        setPrediction(data.predictions[0]);
      } else {
        setErrorMessage("Couldn't identify the car. Try another image.");
      }
    } catch (err) {
      console.error("Prediction error:", err);
      setErrorMessage("There was an issue identifying the car.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="identify-container">
      <h1>Car Identifier</h1>
      <p>Upload an image and let AI identify your car model!</p>

      <form onSubmit={handleSubmit}>
        <div className="upload-container">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="car-preview" />
          </div>
        )}

        <button className="cta-button" type="submit" disabled={loading}>
          {loading ? "Identifying..." : "Identify Car"}
        </button>
      </form>

      {loading && <p className="loading-text">Processing, please wait...</p>}
      {errorMessage && <p className="error-text">{errorMessage}</p>}

      {prediction && (
        <div className="prediction-container">
          <h2>Prediction</h2>
          <p>{prediction.tagName} — {(prediction.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}
