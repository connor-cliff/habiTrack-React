import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, ActivityIndicator, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./home.style";
import { COLORS, icons, SIZES } from '../../constants';
import { HabitCard, Footer, ScreenHeaderBtn } from '../../components';

const Home = () => {
    // Get the params values from local search parameters using expo-router
    const params = useLocalSearchParams();
    const router = useRouter();
    const uid = params.post;
    const uName = params.uName;


    const [habits, setHabits] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const error = false;

    // Updates the habit data after a refresh
    const handleRefresh = () => {
        setRefreshing(true);

        fetch(`http://localhost:8080/api/v1/habit?userId=${params.post}`)
          .then(res => res.json())
          .then(result => {
            setHabits(result);

            setRefreshing(false);
          })
          .catch(error => {
            console.error("Error refreshing data:", error);
            setRefreshing(false);
          });
      };
      
      
    // fetchs user specific habit data from the database
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/habit?userId=${params.post}`)
        .then(res => res.json())
        .then((result) => {
        // Filter the habits by userId before setting into state
            setHabits(result);
            
        })},[ params ])

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
                        icon={icons.menu} 
                        dimension="100%"
                        handlePressMenu={() => router.push({
                            pathname: '/menu/Menu', 
                            params:  { post: uid, uName: uName, handleRefresh: handleRefresh}})}
                        handlePressFriends={() => router.push({
                            pathname: '/friendship/Friends', 
                            params:  { post: uid, uName: uName, handleRefresh: handleRefresh}})}
                        handlePressHome={() => router.push({
                            pathname: '/home/Home', 
                            params:  { post: uid, uName: uName, handleRefresh: handleRefresh}})}
                        handlePressChallenges={() => router.push({
                            pathname: '/challenges/Challenges', 
                            params:  { post: uid, uName: uName, handleRefresh: handleRefresh}})}
                            
                        />
                    ),

                    headerTitle: ""
                }}
            />

            <View style={{ flex: 1, padding: SIZES.medium }}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.greeting}>Good morning</Text>
                    <Text style={styles.userName}>{params.uName}!</Text>
                </View>

                <View style={styles.habitContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    {// renders the habit data if all conditions are met
                        refreshing ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />

                        // checks for any errors 
                    ) : error ? (
                        <Text style={styles.text}>Something went wrong</Text>

                        // renders placeholder if habits is empty 
                    ) : habits.length === 0 ? (
                        <View>
                        
                        <View style={styles.habiContainer}>
                        <View style={styles.speachContainer}>
                        <Text style={styles.text}>My name's Habi!    Try tracking a habit by using the "Add habit" button below!</Text>
                        </View>
                        
                        <Image
                          source={icons.habi1}
                          resizeMode='contain'
                          style={styles.habi}
                        />
                        </View>
                        
                        <View style={styles.btnImageContainer}>
                        <Image
                          source={icons.down}
                          resizeMode='contain'
                          style={styles.btnImage}
                        />
                        </View>

                        </View>
                    ) : (

                        // renders the HabitCard component for each habit 
                        habits.map((item) => (
                        <HabitCard 
                            key={item.habitId}
                            habit={item}
                            handleNavigate={() => router.push({
                                pathname: `/habits/${item.habitId}`, 
                                params: { post: item.habitId, uid: uid, uName: uName, handleRefresh }})} 
                            button={true}
                            refresh={handleRefresh}
                        />
                        )))}

                    </ScrollView>
                </View>
            </View>
            <Footer 
                icon={"Add habit"} 
                handleNavigate={() => router.push({
                    pathname: `/habits/AddHabit`,
                    params: { uid: uid, uName: uName, handleRefresh: handleRefresh }})}
                refresh={handleRefresh} 
            />
              </LinearGradient>      
        </SafeAreaView>
        
    )
}

export default Home;