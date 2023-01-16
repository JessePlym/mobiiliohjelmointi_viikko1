import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [result, setResult] = useState<number>(0);
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");

  const handleSum = () => {
    setResult(Number(number1) + Number(number2));
  }

  const handleSubtract = () => {
    setResult(Number(number1) - Number(number2));
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26}}>Result: {result}</Text>
      <View style={styles.inputView}>
      <TextInput 
        style={styles.inputElement}
        keyboardType="number-pad"
        value={number1}
        onChangeText={num1 => setNumber1(num1)}
      />
      <TextInput
        style={styles.inputElement}
        keyboardType="number-pad"
        value={number2}
        onChangeText={num2 => setNumber2(num2)}
      />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="+"
          onPress={handleSum}
        />
        <Button
          title="-" 
          onPress={handleSubtract}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 100
  }
});
