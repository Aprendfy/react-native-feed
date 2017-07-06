import React, { Component } from 'react';
import { NavigationStyles } from '@expo/ex-navigation';

import List from '../components/FeedList';
import { colors } from '../../theme/styles';
import { backButtonAndTitle } from '../../navigator/components/NavigationBarItems';

export class FeedScreen extends Component {
  static route = {
    navigationBar: {
      visible: true,
      renderTitle: () => backButtonAndTitle('Facebook')
    },
    styles: {
      ...NavigationStyles.FloatHorizontal
    }
  }

  render() {
    return (
      <List
        tabLabel="Facebook"
        color={colors.categorieFacebook}
      />
    );
  }
}

export default FeedScreen;
