import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

import { ScreenHeaderBtn, FriendCard, HabitCard } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./friendprofile.style";
import useFetch from '../../hook/useFetch';


const Friends = () => {
  const { post } = useLocalSearchParams();
  const [user, setUser] = useState("");
  const router = useRouter();
  const error = false;

  const [habits, setHabits] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  const fetchUser = () => {
    fetch(`http://localhost:8080/api/v1/user/${post}`)
    .then(res => res.json())
    .then((result) => {
      setUser(result);
    })
  };


    // // gets habit data from the database
    // useEffect(() => {
    // fetchUser();
    // },[ post ])

    // gets habit data from the database
    useEffect(() => {
        fetchUser()
        fetch(`http://localhost:8080/api/v1/habit?userId=${post}`)
        .then(res => res.json())
        .then((result) => {
        // Filter the habits by userId before setting into state
            setHabits(result);
            
        })},[ post ])

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

            <View>
                <View style={styles.container}>
                        <Text style={styles.title}>Friend profile</Text>
                    </View>
                <View style={styles.pageContainer}>
                    <Image
                        source={icons.userlarge}
                        resizeMode='contain'
                        style={styles.iconImage}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.habitContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Habits</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        {refreshing ? (
                            <ActivityIndicator size="large" color={COLORS.primary} />

                            // checks for any errors 
                        ) : error ? (
                            <Text style={styles.text}>Something went wrong</Text>

                            // renders placeholder if habits is empty 
                        ) : habits.length === 0 ? (
                            <Text style={styles.text}>This user currently has no habits to view</Text>
                        ) : (

                            // renders the HabitCard component for each habit 
                            habits.map((item) => (
                            <HabitCard 
                                key={item.habitId}
                                habit={item}
                                handleNavigate={() => {}} 
                                button={false}
                            />
                            )))}
                        
                        
                        </ScrollView>
                    </View>
               </View>
    </SafeAreaView>
  )
}

export default Friends;