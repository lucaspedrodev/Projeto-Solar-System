import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missao = {
      name: 'Galileo',
      year: '1989',
      country: 'USA',
      destination: 'Júpter',
    };
    return (
      <section>
        <div data-testid="missions"> </div>
        <Title headline="Missões" />
        <MissionCard missao={ missao } />
      </section>
    );
  }
}
export default Missions;
