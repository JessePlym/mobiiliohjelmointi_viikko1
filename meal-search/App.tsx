import { Text, View } from 'react-native';
import { useState } from "react";
import Meals from './components/Meals';
import SearchField from './components/SearchField';
import { styles } from './style';
import { Meal } from './types';

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [mealList, setMealList] =  useState<Meal[]>([]);

  return (
    <View style={styles.container}>
      <Meals mealList={mealList} />
      <SearchField 
        keyword={keyword}
        setKeyword={setKeyword}
        setMealList={setMealList}
      />
    </View>
  );
}
