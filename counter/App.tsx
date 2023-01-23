import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [result, setResult] = useState<number>(0);
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");
  const [calculations, setCalculations] = useState<string[]>(["History"]);

  const calculate = (operator: string): void => {
    if (!isNaN(parseInt(number1)) && !isNaN(parseInt(number2))) {
      let calculation = "";
      if (operator === "+") {
        setResult(parseInt(number1) + parseInt(number2));
        calculation = `${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`;
      } else if (operator === "-") {
        setResult(parseInt(number1) - parseInt(number2));
        calculation = `${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}`;
      } else if (operator === "*") {
        setResult(parseInt(number1) * parseInt(number2));
        calculation = `${number1} * ${number2} = ${parseInt(number1) * parseInt(number2)}`;
      } else {
        setResult(parseFloat(number1) / parseFloat(number2));
        calculation = `${number1} / ${number2} = ${parseFloat(number1) / parseFloat(number2)}`;
      }
      setCalculations([...calculations, calculation]);
      setNumber1("");
      setNumber2("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26}}>Result: {result}</Text>
      <View style={styles.inputView}>
      <TextInput 
        style={styles.inputElement}
        keyboardType="numeric"
        value={number1}
        onChangeText={num1 => setNumber1(num1)}
      />
      <TextInput
        style={styles.inputElement}
        keyboardType="numeric"
        value={number2}
        onChangeText={num2 => setNumber2(num2)}
      />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="+"
          onPress={() => calculate("+")}
        />
        <Button
          title="-" 
          onPress={() => calculate("-")}
        />
        <Button
          title="*" 
          onPress={() => calculate("*")}
        />
        <Button
          title="/" 
          onPress={() => calculate("/")}
        />
      </View>
      <FlatList
        data={calculations}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputElement: {
    borderColor: "gray",
    borderWidth: 1
  },
  inputView: {
    width: 200,
    marginBottom: 16
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 200,
    marginBottom: 80
  },
  text: {
    fontSize: 18
  }
});
