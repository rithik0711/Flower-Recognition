🌸 Flower Recognition App
Identify flower species using AI (React.js + Teachable Machine)

This project is a Flower Image Classification Web App built using React.js and Google Teachable Machine.
Users can upload a flower image, and the model predicts the flower type along with the confidence percentage.

🚀 Features

📸 Upload any flower image

🤖 AI model trained using Google Teachable Machine

🌼 Predicts flower species such as Rose, Lotus, Sunflower, etc.

🔍 Displays confidence percentage

⚡ Fast and works entirely in the browser

🎨 Clean and responsive UI

🧠 Technologies Used

React.js (Vite) – Frontend

TensorFlow.js – ML model execution

Teachable Machine Image Model – Model training

CSS – Styling

📁 Project Structure
frontend/
 ├── public/
 │    └── model/
 │         ├── model.json
 │         ├── metadata.json
 │         └── weights.bin
 ├── src/
 │    ├── App.jsx
 │    ├── App.css
 │    └── main.jsx
 ├── package.json
 └── README.md

🧩 How It Works

User selects an image

The app loads the Teachable Machine model

The image is analyzed in the browser

The model returns:

Flower Name

Confidence Percentage
