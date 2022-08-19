import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <header>
        <div>
          <Header />
        </div>
        <div>
          <SolarSystem />
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
