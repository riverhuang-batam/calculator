import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  constructor(){
    super()
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculation}></View>
      <View style={styles.buttons}>
      <View style={styles.numbers}></View>
      <View style={styles.operation}></View>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result:{
    flex:1,
    backgroundColor: 'red',
  },
  calculation:{
      flex:1,
      backgroundColor:'blue',
  },buttons:{
    flex:7,
    flexDirection:'row'
  },numbers:{
    flex:3,
    backgroundColor:'black'
  },operation:{
    flex:1,
    backgroundColor:'white'
  }
});
