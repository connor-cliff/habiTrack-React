import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { ScreenHeaderBtn, HabitCard } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./friendprofile.style";

const Friends = () => {
// Get the "post" value from local search parameters using expo-router
  const { post } = useLocalSearchParams();
  const router = useRouter();

  const [habits, setHabits] = useState([]);
  const [user, setUser] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const error = false;


  // Fetch specific user database from the database 
  const fetchUser = () => {
    fetch(`http://localhost:8080/api/v1/user/${post}`)
    .then(res => res.json())
    .then((result) => {
      setUser(result);
    })
  };

    // gets user specific habit data from the database
    useEffect(() => {
        fetchUser()
        fetch(`http://localhost:8080/api/v1/habit?userId=${post}`)
        .then(res => res.json())
        .then((result) => {
        // Filter the habits by userId before setting into state
            setHabits(result);
            
        })},[ post ])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.input }}>
            <LinearGradient
                  colors={[ '#2caf6e', 'transparent', 'transparent']}
                  style={{ flex: 1 }}
              >
            <Stack.Screen 
                options={{ 
                    headerStyle: { 
                        backgroundColor: '#2caf6e',
                        shadowColor: '#000', 
                        shadowOffset: { width: 0, height: 7 }, 
                        shadowOpacity: 0.3,
                        shadowRadius: 35
                     },
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                        icon={icons.chevronLeft} 
                        dimension="100%"
                        handlePressMenu={() => router.back()}
                        handlePressFriends={() => router.push({
                            pathname: '/friendship/Friends', 
                            params:  { post: uid, uName: uName, handleRefresh}})}
                        handlePressHome={() => router.push(`/home/Home/?post=${post}&uName=${uName}`)}
                        handlePressChallenges={() => router.push({
                            pathname: '/challenges/Challenges', 
                            params:  { post: uid, uName: uName, handleRefresh}})}
                            
                        />
                    ),

                    headerTitle: ""
                }}
            />

            <View>
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

                    {// Renders the friends habits if the conditions pass 
                        refreshing ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />

                        // checks for any errors 
                    ) : error ? (
                        <Text style={styles.text}>Something went wrong</Text>

                        // renders placeholder if habits is empty 
                    ) : habits.length === 0 ? (
                        <Text style={styles.text}>This user currently has no habits</Text>
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
        </LinearGradient>
    </SafeAreaView>
  )
}

export default Friends;