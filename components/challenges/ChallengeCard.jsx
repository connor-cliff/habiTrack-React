import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./challengecard.style";
import { icons } from "../../constants";

const ChallengeCard = ({ challenge, handlePress }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Image
          source={icons.battle}
          resizeMode='contain'
          style={styles.iconImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.habitName} numberOfLines={1}>
          {challenge.name}
        </Text>
        <Text style={styles.streak}>Tap to select a friend</Text>
      </View>
      <View>

    </View>

    </TouchableOpacity>
  );
};

export default ChallengeCard;
