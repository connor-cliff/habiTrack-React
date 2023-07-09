import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./friendcard.style";
import { icons } from "../../constants";

const FriendCard = ({ userId, name }) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={icons.user}
          resizeMode='contain'
          style={styles.iconImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.habitName} numberOfLines={1}>
          {name}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
          <Text style={styles.buttonText}>DELETE FRIEND</Text>
        </TouchableOpacity>
       </View>
    </View>

    </View>
  );
};

export default FriendCard;
