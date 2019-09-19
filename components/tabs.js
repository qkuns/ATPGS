import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onTab(i){
    this.setState({
      index: i
    })
  }
  render() {
    return (
      <View style={styles.containView}>
        <View style={styles.container}>
          {
            this.props.data.map((value, index) => {
              let itemstyle = {};
              if (this.state.index === index) {
                itemstyle = styles.itemPick;
              } else {
                itemstyle = styles.item;
              }
              return (
                <TouchableOpacity style={itemstyle} key={index} onPress={this.onTab.bind(this, index)}>
                  <Text style={styles.itemText}>{value}</Text>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containView: {
    height: 45,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemPick: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EDEDED'
  },
  itemText: {
    display: 'flex',
    fontSize: 16,
    color: '#5B5B5B',
  }

});

export default Tabs;
