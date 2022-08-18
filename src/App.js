import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

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
          <Title headline="teste" />
        </div>

      </header>
    );
  }
}

export default App;
