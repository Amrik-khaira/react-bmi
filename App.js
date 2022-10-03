import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

<<<<<<< HEAD
=======

>>>>>>> 8a2ec0e (bmi calculator)
class Bmicalc extends Component{
  state = {
    height: '',
    weight: '',
    bmiValue: '',
    bmiResult: '',
 }
 handleHeight = (text) => {
    this.setState({ height: text })
 }
 handleWeight = (text) => {
    this.setState({ weight: text })
 }
 calculate = (height, weight) => {

    var result = (
      parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height)
      );
    result = result.toFixed(2);

    this.setState({ bmiValue: result })
    if(result<18.5){
       this.setState({bmiResult:'Underweight'})
    }
    else if(result>=18.5&&result<=24.9){
       this.setState({bmiResult:'Normal weight'})
    }
    else if(result>=25&&result<=29.9){
       this.setState({bmiResult:'Overweight'})
    }
    else if(result>=30){
       this.setState({bmiResult:'Obesity'})
    }
    else{
       alert('Incorrect Input!');
       this.setState({bmiValue:''})
       this.setState({bmiResult:'Please add a valid input'})
    }
 }

 render(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text style={styles.label}>Height</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Height (centimeters)"
        autoCapitalize="none"
        onChangeText={this.handleHeight}
      />
      <Text style={styles.label}>Weight</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Weight (kilograms)"
        autoCapitalize="none"
        onChangeText={this.handleWeight}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => this.calculate(this.state.height, this.state.weight)}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
      <Text style={styles.output}>{this.state.bmiValue}</Text>
      <Text style={styles.resultText}>{this.state.bmiResult} </Text>
    </View>
  );
}
}

export default Bmicalc;
  

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignContent: "center"
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  submitButton: {
    backgroundColor: "red",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius:10
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight:"bold",
    textTransform: "uppercase" ,
    color: "red",
  },
  label: {
    marginLeft: 15,
  },
});
