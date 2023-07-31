import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, ActivityIndicator, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import styles from "./challenges.style";
import { COLORS, icons, SIZES } from '../../constants';
import { FriendCard, ScreenHeaderBtn } from '../../components';

// Filters users based on friendship status
const filterUsersByFriendship = (friends, users, post) => {

    // Convert post to an integer 
    const postInt = parseInt(post, 10);
  
    // get userIDs from the user list
    const userIds = friends.reduce((acc, friend) => {
      acc.add(friend.user1Id);
      acc.add(friend.user2Id);
      return acc;
    }, new Set());
  
    // Removes those who are not friends with the logged in user and the user themselves from the list
    return users.filter((user) => user.userId !== postInt && userIds.has(user.userId));
  
  };

const ChallengeFriend = () => {
    // Get the "post" value from local search parameters using expo-router
    const { post } = useLocalSearchParams();
    const router = useRouter();

    const [friends, setFriends] = useState([]);
    const [habits, setHabits] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const error = false;

        // fetch friendship data from the database 
  const fetchFriends = () => {
    fetch(`http://localhost:8080/api/v1/friendship?userId=${post}`)
    .then(res => res.json())
    .then((result) => {
      setFriends(result);
    })
  };

    // fetch user data from the database 
  const fetchUsers = () => {
    fetch(`http://localhost:8080/api/v1/user`)
    .then(res => res.json())
    .then((result) => {
      setUsers(result);
    })
  };

  // Fetch friends and users data when the "post" parameter changes
  useEffect(() => {
    fetchFriends();
    fetchUsers();

  },[ post ])

// Filter users whenever friends, users, post, or searchTerm changes
useEffect(() => {
    const filtered = filterUsersByFriendship(friends, users, post);

    setFilteredUsers(filtered);

    }, [friends, users, post ]);

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
                        handlePress={() => router.push({
                            pathname: 'menu/Menu', 
                            params:  { post: post}})}
                        />
                    ),

                    headerTitle: ""
                }}
            />

            <View style={{ flex: 1, padding: SIZES.medium }}>
            <View style={styles.pageContainer}>
                    <Image
                        source={icons.battlelarge}
                        resizeMode='contain'
                        style={styles.iconImage}
                    />

                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeMessage}>Select a challenge to test your friends!</Text>
                </View>
                </View>

                <View style={styles.habitContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Friends</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {refreshing ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />

                        // checks for any errors 
                    ) : error ? (
                        <Text style={styles.text}>Something went wrong</Text>

                        // renders placeholder if friends is empty 
                    ) : friends.length === 0 ? (
                        <Text style={styles.text}>Add friends first to challenge them</Text>
                    ) : (

                        // renders the FriendCard component for each friend 
                        filteredUsers.map((item) => (
                        <FriendCard 
                            key={item.userId}
                            friend={item}
                            handlePress={
                              () => router.push({
                                pathname: `/home/Home`, 
                                params: { post: post } })} 

                        />
                        )))}
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default ChallengeFriend;