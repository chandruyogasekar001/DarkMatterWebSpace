import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AppDetails from './AppDetails'; // Imported AppDetails component

import './App.css';
import icon1 from './icons8-alien-48.png';
import icon2 from './icons8-google-blog-search-48.png';
import icon3 from './icons8-airpods-pro-max-48.png';
import icon4 from './icons8-resume-48.png';
import icon5 from './icons8-human-48.png';

const apps = [
  { id: 1, icon: icon2, label: 'Galaxy blog', description: 'Description for App 1', website: 'https://blog-app-mern-dun.vercel.app/' },
  { id: 2, icon: icon1, label: 'Autobot AI', description: 'Description for App 2', website: 'https://autobot-ai-two.vercel.app/' },
  { id: 3, icon: icon3, label: 'ParallelWorld', description: 'Description for App 1', website: 'https://parallel-world-music-mini.vercel.app/' },
  { id: 4, icon: icon4, label: 'Resume Ready', description: 'Description for App 2', website: 'https://chandruyogasekar001.github.io/resumebuilder/' },
  { id: 5, icon: icon5, label: 'My portfolio', description: 'Description for App 2', website: 'https://chandru-portfolio-react-app.vercel.app/' },
];

function App() {
  const handleSearch = (searchTerm) => {
    // Implement search logic here (optional)
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen apps={apps} onSearch={handleSearch} />} />
          <Route path="/apps/:appId" element={<AppDetails apps={apps} />} /> {/* Passing apps data to AppDetails */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
