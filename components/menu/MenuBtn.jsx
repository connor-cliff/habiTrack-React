import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native';

import styles from "./menubtn.style";

// Creates unique menu buttons based on parameters 
const MenuBtn = ({ icon, label, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <Image
                source={icon}
                resizeMode='contain'
                style={styles.icon} />
            <Text style={styles.menuOptionText}>{label}</Text>
        </TouchableOpacity>
    )};

export default MenuBtn;