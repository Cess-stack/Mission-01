import React, { useState } from "react";
import "../styles/pages/CarIdentifier.css";

// Main component function
export default function Identify() {
  // State variables for managing component state
  const [image, setImage] = useState(null); // Stores the actual image file
  const [previewUrl, setPreviewUrl] = useState(null); // Stores URL for image preview
  const [prediction, setPrediction] = useState(null); // Stores AI prediction results
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [errorMessage, setErrorMessage] = useState(null); // Stores error messages
  const API_URL = "https://9096696202707075072.us-central1-566099857559.prediction.vertexai.goog";


  // Handles file upload
  const handleImageChange = (e) => {
    // Get the selected file
    const file = e.target.files[0];
    
    // Reset prediction and error state
    setImage(file);
    setPrediction(null);
    setErrorMessage(null);

    // Create preview URL if file exists
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    
    // Exit early if no image selected
    if (!image) return;

    // Create form data for API request
    const formData = new FormData();
    formData.append("image", image);

    // Set loading state and clear error
    setLoading(true);
    setErrorMessage(null);

    try {
      // Make API request
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      // Check if response is successful
      if (!response.ok) throw new Error("Failed to fetch prediction");

      // Parse response
      const data = await response.json();
      
      // Check if we got predictions
      if (data.predictions && data.predictions.length > 0) {
        setPrediction(data.predictions[0]);
      } else {
        // Handle case where no prediction was made
        setErrorMessage("Couldn't identify the car. Try another image.");
      }
    } catch (err) {
      // Handle any errors during API call
      console.error("Prediction error:", err);
      setErrorMessage("There was an issue identifying the car.");
    } finally {
      // Always reset loading state
      setLoading(false);
    }
  };

  // Render the component
  return (
    <div className="identify-container">
      {/* Main heading and description */}
      <h1>Car Identifier</h1>
      <p>Upload an image and let AI identify your car model!</p>

      {/* Form for image upload */}
      <form onSubmit={handleSubmit}>
        <div className="upload-container">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </div>

        {/* Show image preview if available */}
        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="car-preview" />
          </div>
        )}

        {/* Submit button with loading state */}
        <button className="cta-button" type="submit" disabled={loading}>
          {loading ? "Identifying..." : "Identify Car"}
        </button>
      </form>

      {/* Loading indicator */}
      {loading && <p className="loading-text">Processing, please wait...</p>}

      {/* Error message display */}
      {errorMessage && <p className="error-text">{errorMessage}</p>}

      {/* Show prediction if available */}
      {prediction && (
        <div className="prediction-container">
          <h2>Prediction</h2>
          <p>{prediction.tagName} — {(prediction.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}


/* Key Concepts:

State Management:
- useState for different types of data
- Multiple state variables to manage component state

Form Handling:
- Prevent default form behavior
- Use FormData for file uploads
- Handle async API calls with async/await

Error Handling:
- Use try/catch blocks
- Show user-friendly error messages
- Recover gracefully from errors

Loading States:
- Track loading status with state
- Disable buttons while loading
- Show loading indicators (e.g. spinners)

File Handling:
- Handle file input and preview
- Create object URLs for previews
- Clean up URLs to avoid memory leaks

Environment Variables:
- Use process.env for configs
- Add fallback values when needed

Component Structure:
- Keep logic and UI separate
- Use clear function names
- Organize code into sections

UI/UX:
- Show user feedback (errors, success)
- Handle loading/error/success states
- Make UI responsive and friendly
*/
