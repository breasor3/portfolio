// App.tsx
import React, { useState } from 'react';
import './App.css';
import NonogramInfo from './components/NonogramsInfo';
import PuzzlePage from './components/PuzzlePage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('aboutMe');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            className={activeTab === 'information' ? 'active' : ''}
            onClick={() => handleTabClick('information')}
          >
            About Me
          </li>
          <li
            className={activeTab === 'nonogram' ? 'active' : ''}
            onClick={() => handleTabClick('nonogram')}
          >
            Nonogram
          </li>
        </ul>
      </nav>

      <div>
        {activeTab === 'information' && <NonogramInfo />}
        {activeTab === 'nonogram' && <PuzzlePage />}
      </div>
    </div>
  );
};

export default App;