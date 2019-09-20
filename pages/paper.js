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
      choice: 0,
      paper: [],
      amount: 0,
    };
    this.Next = this.Next.bind(this);
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  componentWillMount(): void {
    this.setState({
      paper: this.props.navigation.getParam('paper'),
      amount: this.props.navigation.getParam('amount')
    })
  }

  Next() {
    //是否得分？
    const {choice, indexNow, score, paper, amount} = this.state;
    console.log(indexNow);
    if (choice === paper[indexNow].answer) {
      console.log('正确');
      this.setState({
        score: score + 1,
      });
    } else {
      console.log('错误');
    }
    //是否答题完毕
    if (indexNow < amount - 1) {
      this.setState({
        indexNow: indexNow + 1,
        choice: 0,
      });
    } else {
      this.props.navigation.navigate('Over',{
        score: this.state.score,
        amount: amount
      })
    }
  }

  onChangeTab(i) {
    this.setState({
      choice: i,
    });
  }


  render() {

    const rank = this.props.navigation.getParam('rank');
    const {indexNow, paper} = this.state;
    const dif = ['小学', '初中', '高中'];

    return (
      <View style={styles.container}>
        <View style={styles.containView}>
          <View style={styles.title}>
            <Text style={styles.titleText}>开始练习，共{this.state.amount}题</Text>
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
                  No={this.state.indexNow}
                  statement={paper[indexNow].statement}
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
    height: 600,
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
