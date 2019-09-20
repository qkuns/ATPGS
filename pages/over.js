import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/card';

class Paper extends React.Component {
  constructor(props) {
    super(props);

    this.BackMain = this.BackMain.bind(this);
  }


  BackMain(){
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containView}>
          <View style={styles.title}>
            <Text style={styles.titleText}>答题结束</Text>
          </View>
          <Card
            height={300}
            width={300}
            Child={
              <View>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={this.BackMain}
                >
                  <Text style={{fontSize: 16}}>返回</Text>
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
