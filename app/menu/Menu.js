import React from 'react'
import { useState } from "react";
import { View, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { MenuBtn, ScreenHeaderBtn } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "./menu.style";

const Menu = () => {
    
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                    <ScreenHeaderBtn 
                        icon={icons.left}
                        dimension={"70%"}
                        handlePress={() => router.back()}
                    />
                ),
                }}
            />
            
            <View style={styles.wholeMenu}>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.home}
                        label="Home"
                        handleNavigate={() => router.push(`/home/Home/?post=${global.currentUserId}`)}
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.plus}
                        label="Add habit"
                        handleNavigate={() => router.push('habits/AddHabit')}
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.user}
                        label="Friends"
                        handleNavigate={() => router.push('friends/Friends')}
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.logout}
                        label="Logout"
                        handleNavigate={() => router.push('/')}
                        />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Menu;