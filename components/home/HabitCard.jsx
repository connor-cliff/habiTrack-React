import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./habitcard.style";
import { icons } from "../../constants";

const HabitCard = ({ handleNavigate }) => {
  const addOneDay = () => {
    console.log("Streak + 1")
  }


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.iconContainer}>
        <Image
          source={icons.leaf}
          resizeMode='contain'
          style={styles.iconImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.habitName} numberOfLines={1}>
          Habit name
        </Text>
        <Text style={styles.streak}>Streak - 0</Text>
      </View>

      <View >
        <View style={styles.iconPosition}>
          <TouchableOpacity style={styles.btn} onPress={addOneDay}>
            <Image
              source={icons.plus}
              resizeMode='contain'
              style={styles.btnImage}
            />
        </TouchableOpacity>
       </View>
    </View>

    </TouchableOpacity>
  );
};

export default HabitCard;
