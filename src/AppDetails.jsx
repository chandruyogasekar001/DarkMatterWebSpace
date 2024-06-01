// AppDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AppDetails({ apps }) { // Receiving apps data as props
  const { appId } = useParams();

  const app = apps.find(app => app.id.toString() === appId); // Finding app by appId

  if (!app) return <div>App details not found.</div>;

  return (
    <div className="app-details">
      {/* Display app details here */}
      <h2>{app.label}</h2>
      <p>{app.description}</p>
      {/* ... other app details */}
      <Link to="/" className="back-button">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
    </div>
  );
}

export default AppDetails;