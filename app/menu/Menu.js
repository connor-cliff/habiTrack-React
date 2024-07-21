import React from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import { MenuBtn, ScreenHeaderBtn } from "../../components";
import { COLORS, icons} from "../../constants";
import styles from "./menu.style";

const Menu = () => {
    // Get the "post" value from local search parameters using expo-router
    const params = useLocalSearchParams();
    const router = useRouter();

    const post = params.post;
    const uName = params.uName;
    
    const handleRefresh = params.handleRefresh;


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
                        handlePress={() => 
                        router.push({
                            pathname: `/home/Home`,
                            params: { post: post, uName: uName}
                        })}
                    />
                ),}}
            />
            <View style={styles.wholeMenu}>
                <View style={styles.titleContainer} >
                    <Text style={styles.habi}>habi</Text>
                    <Text style={styles.track}>T</Text>
                    <Text style={styles.habi}>rack</Text>
                </View>

                <View style={styles.menuButtons}>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.home}
                        label="Home"
                        handleNavigate={() => 
                            router.push({
                            pathname: `/home/Home`,
                            params: { post: post, uName: uName}
                        })}
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.plus}
                        label="Add habit"
                        handleNavigate={() => router.push({
                            pathname: `/habits/AddHabit`,
                            params: { uid: post, uName: uName, handleRefresh }})}
                         
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.user}
                        label="Friends"
                        handleNavigate={() => router.push({
                            pathname: 'friendship/Friends', 
                            params: { uid: post, uName: uName, handleRefresh }})}
                        />
                </View>
                <View style={styles.container}>
                    <MenuBtn  
                        icon={icons.battle}
                        label="Challenges"
                        handleNavigate={() => router.push({
                            pathname: '/challenges/Challenges', 
                            params: { post: post, uName: uName, handleRefresh: handleRefresh }})}
                        />
                </View>
                <View style={styles.container}>
                    <View style={styles.logoutContainer}>
                        <MenuBtn  
                            icon={icons.logout}
                            label="Logout"
                            handleNavigate={() => router.push({
                        pathname: '/',
                        params: { handleRefresh }})}
                            />
                    </View>
                 </View>
                </View>
            </View>
            <View style={styles.habiContainer}>
                <Image
                    source={icons.habi}
                    resizeMode='contain'
                    style={styles.habiChar}
                />
            </View>
        </SafeAreaView>
    )
}

export default Menu;