import { FlatList, Text, View, Image } from 'react-native'
import { styles } from '../style';
import { Meal } from '../types';

interface Props{
  mealList: Meal[];
} 

export default function Meals({ mealList }: Props) {

  const LineSeparator = () => {
    return(
      <View style={styles.line}/>
    );
  }
  return (
    <FlatList 
      data={mealList}
      ItemSeparatorComponent={LineSeparator}
      renderItem={({ item }) => 
        <View>
          <Text>{item.strMeal}</Text>
          <Image 
            style={styles.image}
            source={{ uri: item.strMealThumb}}  
          />
        </View>  
      }
    />
  )
}
