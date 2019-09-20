import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Card extends React.Component{
  render(){
    return (
      <View style={styles.cardView}>
        <View style={{...styles.card,height: this.props.height,width: this.props.width}}>
          {this.props.Child}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
