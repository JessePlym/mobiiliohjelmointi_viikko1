import { View, Text, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { styles } from "../style";

type Props = NativeStackScreenProps<StackParamList, "History">

export default function History({ route }: Props) {
  const history = route.params;
  
  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>} 
      />
    </View>
  )
}
