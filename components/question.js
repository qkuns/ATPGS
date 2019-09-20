import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Tab from '../components/tabs'

class Question extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.StateView}>
          <View style={styles.Qucontain}>
            <View style={styles.title}>
              <Text style={styles.titleText}>题目{this.props.No}:</Text>
            </View>
            <View style={styles.question}>
              <Text style={styles.questionText}>
                {this.props.statement}
              </Text>
            </View>
          </View>
        </View>
        <Tab
          data={['A','B','C','D']}
          index={this.props.index}
          ChangeTab={this.props.ChangeTab}
        ></Tab>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StateView: {
    height: 150,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  Qucontain: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 10,
  },
  titleText: {
    color: '#666',
    fontSize: 18,
  },
  question:{
    marginLeft:10,
    marginRight: 10
  },
  questionText: {
    color: '#666',
    fontSize: 16,
    lineHeight: 22,
  }
});

export default Question;
