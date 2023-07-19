import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";

import styles from "./footer.style";

const Footer = ({ icon, handleNavigate}) => {

  // const handlePress = () => {
  //   handleNavigate();
  //   refreshHabits();
  // };


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.iconPosition}>
        <View style={styles.likeBtn}>
        {typeof icon === "string" ? (
            <Text style={styles.btnText}>{icon}</Text>
          ) : (
            <Image
              source={icon}
              resizeMode='contain'
              style={styles.likeBtnImage}
            />
          )}
       </View>
      </View>
    </TouchableOpacity>
  );
};

export default Footer;