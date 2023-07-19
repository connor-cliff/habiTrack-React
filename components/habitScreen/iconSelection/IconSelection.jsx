import React, { useState } from 'react';
import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import { icons } from '../../../constants';
import styles from './iconselection.style';

const IconSelection = ({ icon, setIcon }) => {
  const router = useRouter();

  const data = [
    { id: 1, icon: icons.bike },
    { id: 2, icon: icons.leaf },
    { id: 3, icon: icons.cutlery },
    { id: 4, icon: icons.paw },
    { id: 5, icon: icons.pizza },
    { id: 6, icon: icons.smoking },
    { id: 7, icon: icons.walk },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image source={item.icon} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IconSelection;
