import React, { Component, PropTypes } from 'react';
import { StatusBar } from 'react-native';
import { Router } from '../../../router/routes';


class Navigator extends Component {

    render() {
        return (
            <NavigationProvider router={Router}>
                <StatusBar
                    backgroundColor='#ccc'
                    barStyle="light-content"
                />
                <StackNavigation
                    id="master"
                    defaultRouteConfig={{
                        navigationBar: {
                            backgroundColor: '#ccc',
                            tintColor: '#ffffff',
                        }
                    }}
                    initialRoute={Router.getRoute('feed')}
                />
            </NavigationProvider>
        );
    }
}

export default Navigator;