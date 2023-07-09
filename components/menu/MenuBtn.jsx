import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { icons } from '../../constants'

import styles from "./menubtn.style";

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