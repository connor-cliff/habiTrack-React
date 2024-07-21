import { useEffect, useState } from 'react';
import { Stack, useRouter, useLocalSearchParams  } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./footer.style";

const Footer = ({ icon, handleNavigate, handleRefresh }) => {

    const handlePress = () => {
      if (handleRefresh) {
        handleRefresh(); // Call the handleRefresh function
      }
      if (handleNavigate) {
        handleNavigate(); // Call the handleNavigate function if provided
      }
    };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconPosition}>
        <View style={styles.likeBtn}>
        { // renders Complete if icon is a string and a plus icon otherwise
          typeof icon === "string" ? (
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