// src/ImageUploader.jsx
import React, { useState } from 'react';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction('');
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // 👈 Must match backend multer field

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      console.log('Response:', data);

      const predictionLabel = data.predictions?.[0]?.displayNames?.[0];
      setPrediction(predictionLabel || 'No prediction found');
    } catch (error) {
      console.error('Upload error:', error);
      setPrediction('Error predicting image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Upload Your Car Photo</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Analyzing...' : 'Identify Vehicle'}
      </button>

      {prediction && (
        <p className="mt-4 text-lg font-semibold">Prediction: {prediction}</p>
      )}
    </div>
  );
};

export default ImageUploader;
