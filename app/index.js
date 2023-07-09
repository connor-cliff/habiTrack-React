import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from "./index.style";
import { COLORS, icons, SIZES } from '../constants';
import { HabitCard, Footer, ScreenHeaderBtn } from '../components';

const Home = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;
    const [searchTerm, setSearchTerm] = useState("")

    const [selectedHabit, setSelectedHabit] = useState()

    const handleCardPress = (item) => {
        router.push(`/habits/${item.habit_id}`);
        setSelectedHabit(item.habit_id);
    };

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
                    headerTitle: ""
                }}
            />

                <View style={{ flex: 1, padding: SIZES.medium }}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.userName}>Hello Connor</Text>
                    <Text style={styles.welcomeMessage}>Good luck with your goals today!</Text>
                </View>

                <View style={styles.habitContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Habits</Text>
                        <TouchableOpacity>
                        {/*doesnt currently work and im not sure if i should include it*/}
                            <Text styles={styles.headerBtn}>Sort A-Z</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cardsContainer}>
                        {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                        ) : error ? (
                        <Text>Something went wrong</Text>
                        ) : (
                        
                        [ 1, 2, 3 ].map((habit) => (
                            <HabitCard 
                            handleNavigate={() => router.push(`/habits/${habit.habit_id}`)}
                            />
                        ))
                        )}
                    </View>
                    </ScrollView>
                </View>

                </View>
            <Footer icon={icons.plus} handleNavigate={() => router.push('habits/AddHabit')}/>
        </SafeAreaView>
    )
}

export default Home;