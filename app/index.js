import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from "./index.style";
import { COLORS, icons, SIZES } from '../constants';
import { HabitCard, Footer, ScreenHeaderBtn } from '../components';

const Home = () => {
    const { post } = useLocalSearchParams();
    //console.log("index post: " + post)

    // do i need these?
    const router = useRouter();
    const isLoading = false;
    const error = false;
    const test = 10;

    const usersName = global.currentUserName;
    console.log("usersName " + usersName)
   
    const [habits, setHabits] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    /**
     * this refresh works on its own so now i need to just figure out a way to pass it to the footer button
     *  */ 



    const handleRefresh = () => {
        //const userId = userId;
        setRefreshing(true);
        // change to ip and add a note in the readme?
        fetch(`http://localhost:8080/api/v1/habit?userId=${post}`)
          .then(res => res.json())
          .then(result => {
            setHabits(result);
            //console.log("result" + result)
            setRefreshing(false);
          })
          .catch(error => {
            console.error("Error refreshing data:", error);
            setRefreshing(false);
          });
      };
      
      
    // gets habit data from the database
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/habit?userId=${post}`)
        .then(res => res.json())
        .then((result) => {
        // Filter the habits by userId before setting into state

            // const filteredHabits = result.filter(habit => habit.userId === post);
            // console.log(filteredHabits);
            // console.log(post);
            setHabits(result);
            
        })},[ post ])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                        icon={icons.menu} 
                        dimension="130%"
                        handlePress={() => router.push('menu/Menu')}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                        icon={icons.refresh} 
                        dimension="130%"
                        handlePress={handleRefresh}
                        />
                    ),
                    headerTitle: ""
                }}
            />

                <View style={{ flex: 1, padding: SIZES.medium }}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.userName}>Hello {global.currentUsersName}</Text>
                    <Text style={styles.welcomeMessage}>Good luck with your goals today!</Text>
                </View>

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
                        <Text style={styles.text}>Press the plus button to start tracking habits!</Text>
                    ) : (
                        // renders the HabitCard component for each habit 
                        habits.map((item, index) => (
                        <HabitCard 
                            key={item.habitId}
                            habit={item}
                            handleNavigate={() => router.push({pathname: `/habits/${item.habitId}`, params: { post: item.habitId } })} 
                            //handleNavigate={(habit) => handleHabitClick(habit, index)} // Pass the habit and index to the handleHabitClick function

                        />
                        )))}
                       
                    
                    </ScrollView>
                    

                        {/* add an if state ment that says "Press the plus button to start tracking habits!" if habits is  empty*/}


                    {/* <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cardsContainer}>
                        {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                        ) : error ? (
                        <Text>Something went wrong</Text>
                        ) : (
                        
                        habits.map((habit) => (
                            <HabitCard 
                            handleNavigate={() => router.push(`/habits/${habit.habit_id}`)} 
                            habit={habit}
                            />
                            ))
                        )}
                    </View>
                    </ScrollView> */}
                </View>

                </View>
            <Footer icon={icons.plus} handleNavigate={() => router.push('habits/AddHabit')}/>
        </SafeAreaView>
    )
}

export default Home;