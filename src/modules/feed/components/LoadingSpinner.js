import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../theme/styles';

export class LoadingSpinner extends Component {
  render() {
    const { spinnerColor, spinnerSize } = this.props;
    return (
      <ActivityIndicator color={spinnerColor} size={spinnerSize} />
    );
  }
}

LoadingSpinner.propTypes = {
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string
};

LoadingSpinner.defaultProps = {
  spinnerColor: colors.whitePrimary,
  spinnerSize: 'large'
};
