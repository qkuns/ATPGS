import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';


class EditInput extends React.Component {
  constructor(props) {
    super(props);
  }

  // decrease(num) {
  //   let a = Math.max(this.state.amount - num, 10);
  //   this.setState({
  //     amount: a,
  //   });
  // }
  //
  // increase(num) {
  //   let a = Math.min(this.state.amount + num, 30);
  //   this.setState({
  //     amount: a,
  //   });
  // }


  render() {
    return (
      <View style={styles.containView}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.Dec.bind(this,5)}
            style={styles.btn}
          >
            <Text>-5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.Dec.bind(this,1)}
            style={styles.btn}>
            <Text>-1</Text>
          </TouchableOpacity>
          <View style={styles.amount}>
            <Text style={styles.amountText}>{this.props.amount}</Text>
          </View>
          <TouchableOpacity
            onPress={this.props.Inc.bind(this,1)}
            style={styles.btn}
          >
            <Text>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.Inc.bind(this,5)}
            style={styles.btn}>
            <Text>+5</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containView: {
    height: 45,
    marginTop: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    display: 'flex',
    height: 30,
    width: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    display: 'flex',
    height: 30,
    width: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 20,
  },
});
export default EditInput;
