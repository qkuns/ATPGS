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


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getCodeText: '获取验证码'
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.getCode = this.getCode.bind(this);
  }

  onBackPress(){
    this.props.navigation.goBack();
  }

  getCode(){
    this.setState({
      getCodeText: '请查收验证码'
    })
  }
  render() {
    return (
      <Fragment>
        <View style={styles.main}>
          {/*标题文字*/}
          <View style={styles.title}>
            <Text style={styles.titleText}>注册账号</Text>
          </View>
          {/*登陆框*/}
          <View style={styles.signIn}>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                maxLength={18}
                username={true}
                placeholder="请输入手机号"
                autoCapitalize={'none'}
                textContentType={'username'}
                maxLength={11}
              ></TextInput>
              <View>
                <TouchableOpacity
                  style={styles.getCode}
                  onPress={this.getCode}
                >
                  <Text style={{lineHeight:30}}>{this.state.getCodeText}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{...styles.User,borderTopWidth: 1}}>
              <TextInput
                style={styles.Input}
                placeholder="请输入验证码"
                autoCapitalize={'none'}
                keyboardType={'numeric'}
                maxLength={6}
              ></TextInput>
            </View>
            <View style={styles.Pwd}>
              <TextInput
                style={styles.Input}
                placeholder="请输入密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                placeholder="重新输入密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>

          {/*注册*/}
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize: 16}}>注册</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btn} onPress={this.onBackPress}>
            <Text style={{fontSize: 16}}>返回</Text>
          </TouchableOpacity>
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
    height: 200,
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
    flexDirection: 'row',
    borderColor: '#D4D4D4',
    alignItems: 'center'
  },
  Pwd: {
    flex: 1,
    borderColor: '#D4D4D4',
    borderBottomWidth: 1,
    borderTopWidth: 1,
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
  getCode: {
    height:33,
    width: 120,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#D0D0E0",
    alignItems: 'center',
  },
});

export default Register;
