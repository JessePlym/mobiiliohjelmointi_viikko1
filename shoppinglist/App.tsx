import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [list, setList] = useState<string[]>([]);
  const [listItem, setListItem] = useState<string>("");

  const addItem = () => {
    setList([listItem, ...list]);
    setListItem("");
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={{ width: 200, borderColor: "gray", borderWidth: 1}}
        value={listItem}
        onChangeText={item => setListItem(item)}
      />
      <View style={styles.buttons}>
        <Button
          title="Add"
          onPress={addItem}
        />
        <Button
          title="Clear"
          onPress={() => setList([])}
        />
      </View>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList 
        data={list}
        renderItem={({item}) => <Text>- {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 50
  },
  title: {
    color: "blue",
    fontSize: 18
  }
});
