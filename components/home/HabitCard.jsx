import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./habitcard.style";
import { icons } from "../../constants";

const HabitCard = ({ habit, handleNavigate }) => {

  const handleButtonPress = () => {
    // Update the streak 
    const newStreak = habit.streak + 1;

 

    fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?streak=${newStreak}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ streak: newStreak })
    })
    //console.log(habit.habitId)
};

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
          {habit.name}
        </Text>
        <Text style={styles.streak}>Score - {habit.streak}</Text>
      </View>

      <View >
        <View style={styles.iconPosition}>
        {/* this button should just increment and not take the user anywhere  */}
          <TouchableOpacity style={styles.btn} onPress={handleButtonPress}>
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
