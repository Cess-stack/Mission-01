import React, { useState } from "react";
import "../styles/pages/CarIdentifier.css";

export default function Identify() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  // Convert image file to Base64 format
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Extract Base64 part
        resolve(base64String);
      };

      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (e) => {
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

    setLoading(true);
    setErrorMessage(null);

    try {
      // Convert image to Base64
      const base64Image = await convertImageToBase64(image);

      // Format request for Vertex AI
      const requestBody = {
        instances: [
          { image: { bytes: base64Image } }
        ]
      };

      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
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

/* convertImageToBase64 Function
This function transforms an image file into a Base64-encoded string
which is necessary for sending the image to Vertex AI
Vertex AI requires images in Base64 format 
 Base64 encoding allows us to send images inside JSON payloads 
 Reading the image asynchronously ensures smooth performance*/
