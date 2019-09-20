/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.loginCheck = this.loginCheck.bind(this);
    this.SignUp = this.SignUp.bind(this);
  }

  storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  };

  getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value !== null) {
        alert(value)
      }
    } catch(e) {
      // error reading value
    }
  };

  loginCheck() {
    //登陆成功跳转
    this.props.navigation.navigate('Main');
  }


  SignUp() {
    this.props.navigation.navigate('Reg');
  }

  render() {
    return (
      <Fragment>
        <View style={styles.main}>
          {/*标题文字*/}
          <View style={styles.title}>
            <Text style={styles.titleText}>试卷自动生成系统</Text>
          </View>
          {/*登陆框*/}
          <View style={styles.signIn}>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                maxLength={18}
                username={true}
                placeholder="请输入账号"
                autoCapitalize={'none'}
                textContentType={'username'}
                value={this.state.username}
                onChangeText={(text) => {this.setState({username:text})}}
              ></TextInput>
            </View>
            <View style={styles.Pwd}>
              <TextInput
                style={styles.Input}
                placeholder="请输入密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password:text})}
              ></TextInput>
            </View>
          </View>

          {/*登陆按钮*/}
          <TouchableOpacity style={styles.btn} onPress={this.loginCheck}>
            <Text style={{fontSize: 16}}>登陆</Text>
          </TouchableOpacity>

          {/*注册按钮*/}
          <TouchableOpacity onPress={this.SignUp} style={styles.regist}>
            <Text style={{fontSize: 10}}>>> 没有账号？注册一个 >></Text>
          </TouchableOpacity>

          <View style={styles.copyright}>
            <Text style={{color: '#B0B0B0', fontSize: 10}}>
              @Powered By: React-Native
            </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDEDED',
    justifyContent: 'flex-start',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
  },
  titleText: {
    color: '#666',
    fontSize: 20,
  },
  signIn: {
    backgroundColor: '#EDEDED',
    width: 300,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 10,
  },
  Input: {
    flex: 1,
    marginLeft: 20,
  },
  User: {
    flex: 1,
    borderColor: '#D4D4D4',
    borderBottomWidth: 1,
  },
  Pwd: {
    flex: 1,
  },
  btn: {
    display: 'flex',
    backgroundColor: '#D4D4D4',
    height: 40,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regist: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    marginTop: 400,
  },
});

export default Login;
