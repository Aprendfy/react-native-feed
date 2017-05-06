import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navigator from './modules/navigator/components/Navigator';

const store = configureStore({});
console.ignoredYellowBox = ['Warning: BackAndroid']
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
