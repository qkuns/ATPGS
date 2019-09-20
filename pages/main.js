import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Tabs from '../components/tabs';
import EditInput from '../components/editInput';
import Card from '../components/card'
import {generatePaper} from '../common/Generator';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: 0,
      amount: 20,
    };
    this.onExitPress = this.onExitPress.bind(this);
    this.ChangePwd = this.ChangePwd.bind(this);
    this.Start = this.Start.bind(this);
    this.Increase = this.Increase.bind(this);
    this.Decrease = this.Decrease.bind(this);
    this.onChangeTab = this.onChangeTab.bind(this);
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

  Start(){
    this.props.navigation.navigate('Paper', {
      rank: this.state.rank,
      amount: this.state.amount,
      paper: generatePaper(this.state.amount, this.state.rank)
    });
  }

  ChangePwd(){
    this.props.navigation.navigate('ChangePwd')
  }

  Increase(num){
    let a = Math.min(this.state.amount + num, 30);
    this.setState({
      amount: a,
    });
  }

  Decrease(num){
    let a = Math.max(this.state.amount - num, 10);
    this.setState({
      amount: a,
    });
  }

  onChangeTab(i){
    this.setState({
      rank: i
    })
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.containView}>
          <View style={styles.container}>
            {/*卡片*/}
            <Card
              height={250}
              width={300}
              Child={
                <View>
                  <Tabs
                    data={['小学', '初中', '高中']}
                    ChangeTab={this.onChangeTab}
                    index={this.state.rank}
                  ></Tabs>
                  <View style={styles.title}>
                    <Text style={styles.normalText}>请选择题目数量（10~30）</Text>
                  </View>
                  {/*编辑题目数量*/}
                  <EditInput
                    amount = {this.state.amount}
                    Inc = {this.Increase}
                    Dec = {this.Decrease}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={this.Start}
                  >
                    <Text style={{fontSize: 16}}>开始练习！</Text>
                  </TouchableOpacity>
                </View>
              }
            />
            {/*卡片*/}
            <Card
              height={145}
              width={300}
              Child={
                <View>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={this.ChangePwd}
                  >
                    <Text style={{fontSize: 16}}>修改密码</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onExitPress}>
                    <Text style={{fontSize: 16}}>退出登录</Text>
                  </TouchableOpacity>
                </View>
              }
            />


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
  btn: {
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
