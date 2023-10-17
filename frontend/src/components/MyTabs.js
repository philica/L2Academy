import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MyTabs = () => {
    const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
          href="#home"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
          href="#profile"
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => handleTabClick('messages')}
          href="#messages"
        >
          Messages
        </a>
      </li>
    </ul>

    <div className="tab-content">
      <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home">
        <h2>Home Content</h2>
        <p>This is the content for the Home tab.</p>
      </div>
      <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="profile">
        <h2>Profile Content</h2>
        <p>This is the content for the Profile tab.</p>
      </div>
      <div className={`tab-pane fade ${activeTab === 'messages' ? 'show active' : ''}`} id="messages">
        <h2>Messages Content</h2>
        <p>This is the content for the Messages tab.</p>
      </div>
    </div>
  </div>
  )
}

export default MyTabs