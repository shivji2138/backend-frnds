# 🌐 Friendship Day Web App — MERN Stack

This is a full-stack **MERN (MongoDB, Express, React, Node.js)** application to celebrate Friendship Day! Users can view and store special messages and images dedicated to their friends — preserving memories forever 💛

## 🗂 Project Structure

friendship-day/
├── backend/ # Express + MongoDB server
│ ├── index.js
│ ├── models/
│ └── routes/

├── frontend/ # React (Vite) frontend
│ ├── src/
│ ├── public/
│ └── vite.config.js
│
├── package.json # If using root-level scripts (optional)
└── README.md


## 🚀 Getting Started

### 1. Clone the Repo

~~~
git clone https://github.com/shivji2138/backend-frnds.git
cd backend-frnds
📦 Backend Setup (/backend)
🔧 Installation
cd backend
npm install
~~~
⚙️ Configuration
If you’re using a .env file, create one and add:

env
Copy
Edit
MONGODB_URI=your_mongo_connection_string
PORT=3000
Or you can hardcode your MongoDB URI inside index.js for quick testing.

▶️ Run the Server
bash
Copy
Edit
node index.js
Server runs at http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/	Test route
GET	/friends	Fetch all friends
POST	/addfriend	Add new friend (name, message, img)

💻 Frontend Setup (/frontend)
🔧 Installation
bash
Copy
Edit
cd ../frontend
npm install
▶️ Run the App
bash
Copy
Edit
npm run dev
App runs at http://localhost:5173 (Vite default)

🌈 Features
View friendship messages with images

Add new friend message and image

Responsive and memory-themed UI

Connects to backend using Axios

🛠 Tech Stack
Frontend	Backend	Database
React (Vite)	Node.js + Express	MongoDB (Mongoose)

🌐 Deployment Suggestions
Frontend: Netlify / Vercel

Backend: Render / Railway / Glitch

MongoDB: MongoDB Atlas

📬 Author
Made with ❤️ by Shiva Akash R
Celebrate Friendship. Preserve Memories. 💛
