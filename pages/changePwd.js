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
  TouchableOpacity, Alert,
} from 'react-native';
import axios from 'axios';
import qs from 'qs';
import {pwdCheck} from '../common/Check';

class ChangePwd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pwd_origin: '',
      new_pwd: '',
      new_pwd_cfm: ''
    };
    this.ChangeCfm = this.ChangeCfm.bind(this);
  }

  ChangeCfm(){
    const username = this.props.navigation.getParam('username');
    let {pwd_origin, new_pwd, new_pwd_cfm} = this.state;
    if (new_pwd !== new_pwd_cfm){
      Alert.alert(
        '两次密码输入不同❌',
        '😕',
        [{text:'👌'}]
      );
      return;
    }
    if (!pwdCheck(new_pwd)){
      Alert.alert(
        '密码不合法❌',
        '要有大小写字母数字并且长度为6-10.不能有特殊符号\n😕',
        [{text:'👌'}]
      );
      return;
    }
    let param = {
      username: username,
      password: pwd_origin,
      new_password: new_pwd
    };
    param = qs.stringify(param);
    axios.post(
      'http://123.57.237.147/changepwd.php', param)
      .then(res => {
        if (res.data.state === 'error') {
          Alert.alert(
            res.data.errMsg,
            '',
            [{text:'确定'}],
          );
        } else if (res.data.state === 'succeed') {
          //修改成功跳转至登录
          this.props.navigation.navigate('Home');
        }
      });
  }

  render() {
    return (
      <Fragment>
        <View style={styles.main}>
          {/*标题文字*/}
          <View style={styles.title}>
            <Text style={styles.titleText}>修改密码</Text>
          </View>
          {/*登陆框*/}
          <View style={styles.Change}>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                placeholder="请输入原密码"
                autoCapitalize={'none'}
                textContentType={'password'}
                secureTextEntry={true}
                maxLength={10}
                value={this.state.pwd_origin}
                onChangeText={(text) => {
                  this.setState({pwd_origin: text});
                }}
              ></TextInput>
            </View>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                placeholder="请输入新密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
                value={this.state.new_pwd}
                onChangeText={(text) => {
                  this.setState({new_pwd: text});
                }}
              ></TextInput>
            </View>
            <View style={styles.Pwd}>
              <TextInput
                style={styles.Input}
                placeholder="请再次输入新密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
                value={this.state.new_pwd_cfm}
                onChangeText={(text) => {
                  this.setState({new_pwd_cfm: text});
                }}
              ></TextInput>
            </View>
          </View>

          {/*登陆按钮*/}
          <TouchableOpacity
            style={styles.btn}
            onPress={this.ChangeCfm}
          >
            <Text style={{fontSize: 16}}>确认修改</Text>
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
  Change: {
    backgroundColor: '#EDEDED',
    width: 300,
    height: 150,
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
});

export default ChangePwd;
