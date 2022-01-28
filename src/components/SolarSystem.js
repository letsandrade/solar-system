import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const { planets } = this.props;

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((planet) => <PlanetCard key={ planet.name } planet={ planet } />) }
      </div>
    );
  }
}

export default SolarSystem;
