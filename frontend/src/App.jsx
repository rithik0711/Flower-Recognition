import React, { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import "./App.css";

function App() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Load model once
  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsLoading(true);
        const modelURL = "/model/model.json";
        const metadataURL = "/model/metadata.json";

        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        setModelLoaded(true);
        console.log("Model Loaded Successfully");
      } catch (err) {
        console.error("Failed to load model:", err);
        setError("Failed to load the flower recognition model. Please refresh the page.");
      } finally {
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Reset previous state
    setPrediction(null);
    setError(null);
    setIsLoading(true);

    try {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);

      const imgElement = document.createElement("img");
      imgElement.src = imageURL;

      imgElement.onload = async () => {
        if (!model) {
          setError("Model not loaded yet. Please wait and try again.");
          setIsLoading(false);
          return;
        }

        try {
          const predictions = await model.predict(imgElement);
          const sorted = predictions.sort((a, b) => b.probability - a.probability);
          setPrediction(sorted[0]);
        } catch (err) {
          console.error("Prediction error:", err);
          setError("Failed to analyze the image. Please try another one.");
        } finally {
          setIsLoading(false);
        }
      };

      imgElement.onerror = () => {
        setError("Failed to load the image. Please try another one.");
        setIsLoading(false);
      };
    } catch (err) {
      console.error("Image processing error:", err);
      setError("Failed to process the image. Please try again.");
      setIsLoading(false);
    }
  };

  const resetApp = () => {
    setImagePreview("");
    setPrediction(null);
    setError(null);
    document.getElementById("file-input").value = "";
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Flower Recognition</h1>
        <p>Upload an image of a flower to identify its species</p>
      </header>

      <main className="app-main">
        {!modelLoaded && !error && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading flower recognition model...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        )}

        {modelLoaded && (
          <div className="upload-section">
            <div className="file-input-container">
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              <label htmlFor="file-input" className="file-input-label">
                <span className="upload-icon">📷</span>
                <span>Choose a flower image</span>
              </label>
            </div>

            {imagePreview && (
              <button onClick={resetApp} className="reset-button">
                Try Another Image
              </button>
            )}
          </div>
        )}

        {imagePreview && (
          <div className="image-preview-container">
            <img
              src={imagePreview}
              alt="Flower preview"
              className="flower-image"
            />
            {isLoading && (
              <div className="image-overlay">
                <div className="spinner"></div>
                <p>Analyzing flower...</p>
              </div>
            )}
          </div>
        )}

        {prediction && (
          <div className="prediction-result">
            <div className="result-card">
              <h2>{prediction.className}</h2>
              <div className="confidence-meter">
                <div className="confidence-label">Confidence</div>
                <div className="confidence-bar">
                  <div
                    className="confidence-fill"
                    style={{ width: `${prediction.probability * 100}%` }}
                  ></div>
                </div>
                <div className="confidence-value">
                  {(prediction.probability * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React.js and Teachable Machine</p>
      </footer>
    </div>
  );
}

export default App;