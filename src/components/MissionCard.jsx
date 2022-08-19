import PropTypes from 'prop-types';
import React from 'react';

// usei o npm run lint -- --fix para corrigir os erros de lint e ficou estranho desse jeito

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          {' '}
          { name }
          {' '}
        </p>
        <p data-testid="mission-year">
          {' '}
          { year }
          {' '}
        </p>
        <p data-testid="mission-country">
          {' '}
          { country }
          {' '}
        </p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionCard;
