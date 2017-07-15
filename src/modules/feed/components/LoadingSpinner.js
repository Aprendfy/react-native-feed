import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/styles';

export class LoadingSpinner extends Component {
  render() {
    const { spinnerColor, spinnerSize, style } = this.props;
    return (
      <View style={[style, { flex: 1, justifyContent: 'center' }]}>
        <ActivityIndicator color={spinnerColor} size={spinnerSize} />
      </View>
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
