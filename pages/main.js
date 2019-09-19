import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Tabs from '../components/tabs';
import EditInput from '../components/editInput';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: 0,
    };
    this.onExitPress = this.onExitPress.bind(this);
  }

  onExitPress(){
    Alert.alert(
      "确认退出吗？",
      "",
      [
        {
          text: "取消",
        },
        {
          text: "退出",
          onPress: () => this.props.navigation.goBack()
        }
      ]
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.containView}>
          <View style={styles.container}>
            {/*卡片*/}
            <View style={styles.cardView}>
              <View style={styles.card1}>
                <Tabs data={['小学', '初中', '高中']}></Tabs>
                <View style={styles.title}>
                  <Text style={styles.normalText}>请选择题目数量（10~30）</Text>
                </View>
                {/*编辑题目数量*/}
                <EditInput/>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{fontSize: 16}}>开始练习！</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*卡片*/}
            <View style={styles.cardView}>
              <View style={styles.card2}>
                <TouchableOpacity
                  style={styles.btn}
                >
                  <Text style={{fontSize: 16}}>修改密码</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={this.onExitPress}>
                  <Text style={{fontSize: 16}}>退出登录</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDEDED',
    justifyContent: 'flex-start',
  },
  containView: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    height: 500,
  },
  title: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  titleText: {
    color: '#666',
    fontSize: 20,
  },
  normalText: {
    color: '#666',
    fontSize: 18,
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    width: 300,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  card2: {
    width: 300,
    height: 145,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  btn: {
    display: 'flex',
    height: 40,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;
