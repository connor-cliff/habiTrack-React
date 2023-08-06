import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./friendcard.style";
import { icons } from "../../constants";

// Creates the friend card with the appropriate data
const FriendCard = ({ friend, handlePress, add }) => {

  return (
    <View style={styles.container} >
        <View style={styles.iconContainer}>
          <Image
            source={icons.user}
            resizeMode='contain'
            style={styles.iconImage}
          />
        </View>

        <View style={styles.textContainer}>
           <Text style={styles.friendName} numberOfLines={1}>
            {friend.name}
          </Text>
        </View>

          {// switches friend card button depending on purpose
            add === true ? ( 
        <View style={styles.buttonContainer}>
          <View style={styles.addButtonWrapper}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.buttonText}>Add friend</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : add === false ? (
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.buttonText}>View profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // for add = null
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.buttonText}>Select friend</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
    
  );
};

export default FriendCard;
