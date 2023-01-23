import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const listSeparator = () => {
    return(
      <View style={{ height: 1, backgroundColor: "blue"}} />
    );
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1}}
        value={todo}
        onChangeText={text => setTodo(text)}
      />
      <Button
        title="Add todo"
        onPress={() => setTodos([todo, ...todos])}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => <Text style={{ fontSize: 18}}>{item}</Text>}
        ItemSeparatorComponent={listSeparator}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
