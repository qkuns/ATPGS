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


class ChangePwd extends React.Component {

  constructor(props) {
    super(props);
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
              ></TextInput>
            </View>
            <View style={styles.User}>
              <TextInput
                style={styles.Input}
                placeholder="请输入新密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.Pwd}>
              <TextInput
                style={styles.Input}
                placeholder="请再次输入新密码"
                textContentType={'password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>

          {/*登陆按钮*/}
          <TouchableOpacity style={styles.btn}>
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
