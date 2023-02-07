import { TextInput, Button, View, ActivityIndicator } from 'react-native'
import { useState, Dispatch, SetStateAction } from "react";
import { styles } from '../style';
import { BASE_URL } from '../URLs/Apis';
import { Meal } from '../types';

interface Props{
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  setMealList: Dispatch<SetStateAction<Meal[]>>;
} 

export default function SearchField({ keyword, setKeyword, setMealList }: Props) {
  const [loading, setLoading] = useState(false);

  const fetchMeals = () => {
    setLoading(true);
    fetch(`${BASE_URL}${keyword}`)
    .then(res => res.json())
    .then(data => {
      setMealList(data.meals);
      setLoading(false);
    })
    .catch(err => console.log(err));
    setKeyword("");
  }

  return (
    <View>
      <ActivityIndicator size="large" animating={loading}/>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={text => setKeyword(text)}
      />
      <Button 
        title="Find"
        onPress={fetchMeals}
      />
    </View>
  )
}
