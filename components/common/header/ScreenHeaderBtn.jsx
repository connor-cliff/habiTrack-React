import React from 'react'
import { Dimensions, Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ icon, dimension, handlePress }) => {
  return (
    <TouchableOpacity 
      style={styles.buttonContainer} 
      onPress={handlePress} >
      <Image
        source={icon}
        resizeMode='cover'
        style={styles.buttonImage( dimension )}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
