import React, {Component, Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/login';
import Main from './pages/main';
import Second from './pages/second'

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Login,
//   },
// }, {
//   initialRouteName: 'Home',
// });

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Test:{
      screen: Main,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Sec:Second
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  };
}

