import React, { useCallback } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <header>
        <div>
          <Header />
        </div>
        <div>
          <SolarSystem />
          <Missions />
        </div>
        <div>
          <Title headline="" />
        </div>
        <div>
          <PlanetCard planetName="" planetImage="" />
        </div>

      </header>
    );
  }
}

export default App;
