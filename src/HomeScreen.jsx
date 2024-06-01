import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function HomeScreen({ apps, onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();

  const filteredApps = searchTerm
    ? apps.filter((app) => app.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : apps;

  const handleSearch = (term) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const handleIconClick = (app) => {
    window.location.href = app.website; // Redirect to app's website
  };

  return (
    <div className="home-screen">
      <SearchBar onSearch={handleSearch} />
      <p className='hed'>web project workspace</p>
      <div className="app-container">
        {filteredApps.map((app) => (
          <div key={app.id} className="app-card">
            <a href={app.website} target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick(app)}>
              <img src={app.icon} alt={app.label} className="app-icon" />
            </a>
            <div className="app-label">{app.label}</div>
          </div>
        ))}
      </div>
      <div  className='profile'>
        <a href='https://chandru-portfolio-react-app.vercel.app/' target='_blank' rel="noopener noreferrer" >portfolio</a>
      </div>
    </div>
  );
}

export default HomeScreen;
