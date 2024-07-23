import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission_card" data-testid="mission-card">
        <p className="mission_name" data-testid="mission-name">{ name }</p>
        <div className="mission_content">
          <p data-testid="mission-year">{`Ano: ${year}`}</p>
          <p data-testid="mission-country">{`País: ${country}`}</p>
          <p data-testid="mission-destination">{`Destino: ${destination}`}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
