import React from 'react'
import { Image, TouchableOpacity, View, Text } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ icon, dimension, handlePressMenu, handlePressFriends, handlePressHome, handlePressChallenges }) => {
  return (
    <View style={styles.header}>
    <TouchableOpacity 
      style={styles.buttonContainer} 
      onPress={handlePressMenu} >
      <Image
        source={icon}
        resizeMode='cover'
        style={styles.buttonImage( dimension )}
      />
    </TouchableOpacity>
    <View style={styles.textHeader}>
    <TouchableOpacity onPress={handlePressFriends} >
      <Text style={styles.textButtonF}>Friends</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePressHome} >
      <Text style={styles.textButtonH} >Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePressChallenges} >
      <Text style={styles.textButtonC} >Challenges</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default ScreenHeaderBtn;
