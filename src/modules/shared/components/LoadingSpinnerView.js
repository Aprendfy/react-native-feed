import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { LoadingSpinner } from '../../feed/components/LoadingSpinner';

export class LoadingSpinnerView extends Component {
  render() {
    const { isLoading, children, spinnerStyle } = this.props;
    return (
      <View style={{ flex: 1 }} >
        {isLoading ? <LoadingSpinner style={spinnerStyle} /> : children}
      </View>
    );
  }
}

LoadingSpinnerView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  spinnerStyle: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

LoadingSpinnerView.defaultProps = {
  isLoading: false
};
