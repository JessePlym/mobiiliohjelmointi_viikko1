import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Button, Text, TextInput } from "react-native";
import { styles } from "../style";
import { StackParamList } from "../types";

type Props = NativeStackScreenProps<StackParamList, "Calculator">

export default function Calculator({ navigation }: Props) {
  const [result, setResult] = useState<number>(0);
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");
  const [calculations, setCalculations] = useState<string[]>(["History"]);

  const validateInputs = (input1: string, input2: string) => {
    if (!isNaN(parseInt(input1)) && !isNaN(parseInt(input2))) {
      return true
    }
    return false
  }

  const calculate = (operator: string): void => {
    if (validateInputs(number1, number2)) {
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
        <Button
          title="History"
          onPress={() => navigation.navigate("History", calculations)}
        />
      </View>
    </View>
  );
}