<h1>🌸 Flower Recognition App</h1>
<h3>Identify flower species using AI (React.js + Teachable Machine)</h3>

<p>
  This project is a <strong>Flower Image Classification Web App</strong> built using 
  <strong>React.js</strong> and <strong>Google Teachable Machine</strong>.<br>
  Users can upload a flower image, and the model predicts the flower type along with the confidence percentage.
</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>📸 Upload any flower image</li>
  <li>🤖 AI model trained using Google Teachable Machine</li>
  <li>🌼 Predicts flower species such as <strong>Rose, Lotus, Sunflower, Hibiscus, Jasmine</strong></li>
  <li>🔍 Displays confidence percentage</li>
  <li>⚡ Fast and works entirely in the browser</li>
  <li>🎨 Clean and responsive UI</li>
</ul>

<hr>

<h2>🧠 Technologies Used</h2>
<ul>
  <li><strong>React.js (Vite)</strong> – Frontend</li>
  <li><strong>Tf.js (TensorFlow.js)</strong> – ML model execution</li>
  <li><strong>Teachable Machine Image Model</strong> – Model training</li>
  <li><strong>CSS</strong> – Styling</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>

<pre>
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
</pre>

<hr>

<h2>🧩 How It Works</h2>
<ol>
  <li>User selects an image</li>
  <li>The app loads the Teachable Machine model</li>
  <li>TensorFlow.js analyzes the image</li>
  <li>The model returns:<br>
      🌼 <strong>Predicted Flower Name</strong><br>
      📊 <strong>Confidence Percentage</strong>
  </li>
</ol>

<hr>

