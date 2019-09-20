import React, {Component, Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/register'
import ChangePwd from './pages/changePwd'
import Paper from './pages/paper'

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
    Reg:{
      screen: Register,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    ChangePwd: {
      screen: ChangePwd,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Paper: {
      screen: Paper,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    }
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

