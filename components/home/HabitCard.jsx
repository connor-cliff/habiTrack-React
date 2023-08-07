import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./habitcard.style";
import { icons } from "../../constants";

const HabitCard = ({ habit, handleNavigate, button, refresh }) => {

  const getIcon = () => {
        // Check if the habit is a challenge
        if (habit.name === "Daily walk for 30 days" || habit.name === "Meditation challenge" || habit.name === "Water challenge") {
          // renders the correct icon for challenges
          return icons.battle;
        } else {
          return icons.leaf;
        }
  }

  const handleButtonPress = () => {
    // Increment the streak
    const newStreak = habit.streak + 1;

    // fetches habit name and streak from the database
    fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?streak=${newStreak}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ streak: newStreak }),
    })
      .then(() => {
        // If the PUT request is successful, call the refresh function
        refresh();
      })
      .catch((error) => {
        console.error("Error updating streak:", error);
      });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      handleNavigate();
      refresh(); 
    }}>
      <View style={styles.iconContainer}>
        <Image
          source={getIcon()}
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
      <View>
      { // habits can only be edited if accessed from the home screen
        button ? (
          <View style={styles.iconPosition}>

            <TouchableOpacity style={styles.btn} onPress={handleButtonPress}>
              <Image
                source={icons.plus}
                resizeMode='contain'
                style={styles.btnImage}
              />
            </TouchableOpacity>
          </View>
       ) : (
        <View />
      )}

    </View>

    </TouchableOpacity>
  );
};

export default HabitCard;
