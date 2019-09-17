import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDEDED',
    justifyContent: 'flex-start',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
  },
  titleText: {
    color: '#666',
    fontSize: 20,
  },
  signIn: {
    backgroundColor: '#EDEDED',
    width: 300,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderRadius: 10,
  },
  Input: {
    flex: 1,
    marginLeft: 20,
  },
  User: {
    flex: 1,
    borderColor: '#D4D4D4',
    borderBottomWidth: 1,
  },
  Pwd: {
    flex: 1,
  },
  btn: {
    display: 'flex',
    backgroundColor: '#B3B3B3',
    height: 40,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regist: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    marginTop: 400,
  },
});
