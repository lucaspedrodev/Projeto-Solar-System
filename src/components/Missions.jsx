import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="missions"> </div>
        <Title headline="Missões" />
      </section>
    );
  }
}
export default Missions;
