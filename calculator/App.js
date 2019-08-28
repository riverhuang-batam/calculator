  import React, {Component} from 'react';
  import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

  export default class App extends Component{
    constructor(){
      super()
      this.state={
        resultText:""
      }
    }
    calculateResult(){
      const text = this.state.resultText
    }
    buttonPressed(text){
      console.log(text)
      if(text == '='){
        return this.calculateResult()
      }
      this.setState({
        resultText: this.state.resultText + text
      })
    }
    operate(operations){
      switch(operations){
        case 'Del':
          let text = this.state.resultText.split('')
          text.pop()
          this.setState({
            resultText:text.join('')
          })
        case '+':
          
        case '-':
        case '÷':
        case 'x':
      }
    }
    render(){
      let rows = []
      let nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,'=']]
      
      for(let i = 0; i < 4; i++){
        let row = []
        for(let j = 0; j < 3; j++){
          row.push(
            <TouchableOpacity onPress= {()=> this.buttonPressed(nums[i][j])} style={styles.btn}>
              <Text>{nums[i][j]}</Text>
            </TouchableOpacity>
          )
          }
          rows.push(<View style={styles.row}>{row}</View>)
        }
        

        let ops = []
        let operations = ['Del','+','-','÷','x']
        for(let i = 0; i < 5; i++){
          ops.push(
            <TouchableOpacity style={styles.btn} onPress={()=> this.operate(operations[i])}>
              <Text>{operations[i]}</Text>
            </TouchableOpacity>
          )
        }
      
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText} >{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>123</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
          {rows}
        </View>
        <View style={styles.operation}>
          {ops}
        </View>
        </View>
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },row:{
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },resultText:{
      fontSize:30,
      color:'white'
    },calculationText:{
      fontSize:24,
      color:'white'
    },btn:{
      flex:1,
      alignItems:'center',
      alignSelf: 'stretch',
      justifyContent:'center'
    },
    result:{
      flex:2,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems:'flex-end'
    },
    calculation:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'flex-end'
    },buttons:{
      flex:7,
      flexDirection:'row'
    },numbers:{
      flex:3,
      backgroundColor:'white'
    },operation:{
      flex:1,
      justifyContent:'space-around',
      backgroundColor:'blue'
    },btnText:{
      color:'white',
      fontSize: 20
    }
  });
