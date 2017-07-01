import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { CardHeader, CardBody, CardFooter } from './';
import Styles from './styles/FeedCardStyle';

export class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: true };
  }

  toggleIsCollapsed() {
    this.state.isCollapsed = !this.state.isCollapsed;
  }

  render() {
    const { isCollapsed } = this.state;
    const { title, category, readingTime, level, color, image, body } = this.props;
    const headerProps = { title, readingTime, level, color, image, category };

    return (
      <View style={isCollapsed ? Styles.collapsedContainer : Styles.fullContainer}>
        <CardHeader {...headerProps} />
        <CardBody text={body} />
        <CardFooter />
      </View>
    );
  }
}

FeedCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  readingTime: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
};

FeedCard.defaultProps = {
  title: '',
  category: '',
  readingTime: '',
  level: '',
  color: '',
  image: '',
  body: '',
};
