import React, { Component } from 'react';
import PropTypes from 'prop-types';
// ref: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
class Title extends Component {
  render() {
    const { headline } = this.props;

    return (
      <h2 className="title_component">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
