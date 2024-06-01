import React from 'react';
import { Link } from 'react-router-dom';

function AppIcon({ icon, label, to, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call onClick prop if provided
    }
  };

  return (
    <Link to={to} className="app-icon" onClick={handleClick}>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </Link>
  );
}

export default AppIcon;