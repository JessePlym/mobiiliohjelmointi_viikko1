import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useMemo, useState } from 'react';

const TITLE: string = "Guess a number between 1-100";

export default function App() {

  const [msg, setMsg] = useState<string>(TITLE);
  const [guessedNumber, setGuessedNumber] = useState<string>("");
  const [totalGuesses, setTotalGuesses] = useState<number>(1);
  const [games, setGames] = useState<number>(0);

  const randomNumber: number = useMemo(() => {
    return Math.floor(Math.random() * 100) + 1;
  }, [games])
  
  const handlePress = (): void => {
    if (Number(guessedNumber) > randomNumber) {
      setMsg(`Your guess ${guessedNumber} is too high`);
    } else if (Number(guessedNumber) < randomNumber) {
      setMsg(`Your guess ${guessedNumber} is too low`);
    } else {
      Alert.alert(`You guessed the number in ${totalGuesses} guesses`);
      setMsg(TITLE);
      setGames((prev: number) => prev + 1);
      setTotalGuesses(1);
      setGuessedNumber("");
      return;
    }
    setTotalGuesses((prevGuesses: number) => prevGuesses + 1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guessedNumber}
        onChangeText={num => setGuessedNumber(num)}
      />
      <Button 
        title="make guess"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  },
  input: {
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    width: 50,
    margin: 25
  }
});
