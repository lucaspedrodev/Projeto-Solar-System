import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      (
        <section>
          <div data-testid="solar-system"> </div>
          <Title headline="Planetas" />
        </section>
      ),
      planets.map((planeta) => (
        <PlanetCard
          key={ planeta.name }
          planetName={ planeta.name }
          planetImage={ planeta.image }
        />
      ))
    );
  }
}
export default SolarSystem;
