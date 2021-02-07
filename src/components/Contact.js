import React from 'react';
import './Style.css';

const online = true;
const light = true;

function Contact() {
  return (
    <div className = "Contact">

        <img className="avatar"
        src="https://randomuser.me/api/portraits/women/87.jpg"
        alt="Naomi Peters" />

      <div>
          <h4 className ="name">Naomi Peters</h4>

        <div className="status">
            <div class = "status-online"></div>
            <p className = "status-text">{online ? "online" : "offline"}</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;