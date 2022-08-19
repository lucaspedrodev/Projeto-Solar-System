import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        {planets.map((planeta) => (
          <PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />
        ))}

        <div data-testid="solar-system"> </div>
        <Title headline="Planetas" />
      </section>
    );
  }
}
export default SolarSystem;
