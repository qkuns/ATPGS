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
              <Text style={styles.titleText}>题目{this.props.No+1}:</Text>
            </View>
            <View style={styles.question}>
              <Text style={styles.questionText}>
                {this.props.statement}
              </Text>
            </View>
            <View style={styles.OptionView}>
              <Text style={styles.OptionText}>A ： {this.props.Option.A}</Text>
              <Text style={styles.OptionText}>B ： {this.props.Option.B}</Text>
              <Text style={styles.OptionText}>C ： {this.props.Option.C}</Text>
              <Text style={styles.OptionText}>D ： {this.props.Option.D}</Text>
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
    height: 200,
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
  },
  OptionView: {
    marginLeft: 10,
    marginRight: 10,
  },
  OptionText: {
    color: '#666',
    lineHeight: 30
  }
});

export default Question;
