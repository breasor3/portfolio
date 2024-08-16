// App.tsx
import React, { useState } from 'react';
import './App.css';
import NonogramInfo from './components/NonogramsInfo';
import PuzzlePage from './components/PuzzlePage';
import RecipeFinder from './components/RecipeFinder';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nonogram');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
        <li
            className={activeTab === 'aboutme' ? 'active' : ''}
            onClick={() => handleTabClick('aboutme')}
          >
            About Me
          </li>
          <li
            className={activeTab === 'information' ? 'active' : ''}
            onClick={() => handleTabClick('information')}
          >
            Explanation
          </li>
          <li
            className={activeTab === 'nonogram' ? 'active' : ''}
            onClick={() => handleTabClick('nonogram')}
          >
            Nonogram
          </li>
          <li
            className={activeTab === 'recipefinder' ? 'active' : ''}
            onClick={() => handleTabClick('recipefinder')}
          >
            Recipes
          </li>
        </ul>
      </nav>

      <div>
        {activeTab === 'information' && <NonogramInfo/>}
        {activeTab === 'nonogram' && <PuzzlePage/>}
        {activeTab === 'recipefinder' && <RecipeFinder/>}
        {activeTab === 'aboutme' && <AboutMe/>}
      </div>
    </div>
  );
};

export default App;