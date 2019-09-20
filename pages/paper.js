import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/card';
import Question from '../components/question';

class Paper extends React.Component {
  constructor(props) {
    super(props);
    //获取参数
    this.state = {
      indexNow: 0,
      score: 0,
      choice: 0
    };
    this.Next = this.Next.bind(this);
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  Next(){
    //是否得分？

    //是否答题完毕
    const {indexNow:now} = this.state;
    if(now < 29){
      this.setState({
        indexNow: now+1
      })
    } else {

    }
  }

  onChangeTab(i){
    this.setState({
      choice: i
    })
  }


  render() {

    const rank = this.props.navigation.getParam('rank');
    const amount = this.props.navigation.getParam('amount');
    const dif = ['小学','初中','高中'];
    console.log(rank);
    console.log(amount);

    return (
      <View style={styles.container}>
        <View style={styles.containView}>
          <View style={styles.title}>
            <Text style={styles.titleText}>开始练习，共{amount}题</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>难度：{dif[rank]}</Text>
          </View>
          <Card
            height={300}
            width={300}
            Child={
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Question
                  index={this.state.choice}
                  ChangeTab={this.onChangeTab}
                />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={this.Next}
                >
                  <Text style={{fontSize: 16}}>下一题</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
  },
  containView: {
    height: 600
  },
  btn: {
    height: 40,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  titleText: {
    color: '#666',
    fontSize: 20,
  },
});

export default Paper;
