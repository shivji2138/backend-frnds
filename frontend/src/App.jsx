import React, { useState } from 'react';
import axios from 'axios';
import FriendCard from './components/FriendCard';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [friend, setFriend] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!name.trim()) return;
    try {
      const res = await axios.get(`https://5915fr58-3000.inc1.devtunnels.ms/friends/${name}`);
      setFriend(res.data);
      setNotFound(false);
    } catch (error) {
      setFriend(null);
      setNotFound(true);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Enter Your Name to reveal surprise from Shiva Akash R  </h1>
        


      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Reveal Now</button>
      </div>

      {friend && <FriendCard friend={friend} />}

      {notFound && (
        <div className="not-found">
          <p>Hey  {name}</p>
          <p>Happy Friendship Day, thanks for being a part in my life</p>
        </div>
      )}
    </div>
  );
}

export default App;
