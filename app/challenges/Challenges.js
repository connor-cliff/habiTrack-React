import { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./challenges.style";
import { COLORS, icons, SIZES } from '../../constants';
import { ChallengeCard, FriendCard, ScreenHeaderBtn } from '../../components';

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

const Challenges = () => {
    // Get the params value from local search parameters using expo-router
    const params = useLocalSearchParams();
    const router = useRouter();
    const post = params.post;
    const uName = params.uName;
    const handleRefresh = params.handleRefresh;

    const [friends, setFriends] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState({});

    const [reminder, setReminder] = useState('');
    const streak = 0;

    // Define the challenges array with example challenges
    const challenges = [
        {
            name: "Daily walk for 30 days",
            description: "Go for a walk every day for 30 days",
        },
        {
            name: "Meditation challenge",
            description: "Meditate for atleast 10 minutes every day for 15 days",
        },
        {
            name: "Water challenge",
            description: "Drink atleast 2 litres of water each day for 30 days",
        },

    ];


    // handles the challenge creation oncee a user selects a friend
    const handlePress = ( id ) => {

        // create challenge details for user 1
        const user1Challenge = {
            userId: parseInt(post),
            name: selectedChallenge.name,
            description: selectedChallenge.description,
            reminder,
            streak,
        };

        // create challenge details for user 2
        const user2Challenge = {
            userId: id,
            name: selectedChallenge.name,
            description: selectedChallenge.description,
            reminder,
            streak,
        };

        // Save data to the database for user 1
        fetch("http://localhost:8080/api/v1/habit",{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify (user1Challenge),
        })

        // Save data to the database for user 2
        fetch("http://localhost:8080/api/v1/habit",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify (user2Challenge),
            })
    
        
        //refreshes habit data on the home page after adding a challenge
        .then(() => {
            if (handleRefresh) {
              handleRefresh;
          }

        // Navigate to the Home screen with the updated user data
        router.push({
            pathname: `/home/Home`,
            params: { post: post, uName: uName}})
        })};

    const handleChallengeCardPress = (challenge) => {
        setSelectedChallenge(challenge);
      };

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
                        handlePressMenu={() => router.push(`/menu/Menu/?post=${post}&uName=${uName}`)}
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

            <View style={{ flex: 1, padding: SIZES.medium }}>
            <View style={styles.pageContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={icons.habi1}
                        resizeMode='contain'
                        style={styles.iconImage}
                    />
                     <Image
                        source={icons.sword}
                        resizeMode='contain'
                        style={styles.iconImageSword}
                    />

                </View>

                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeMessage}>Select a challenge to test your friends!</Text>
                </View>
                </View>

                <View style={styles.habitContainer}>


                        { // checks a challenge has not already been selected
                            Object.keys(selectedChallenge).length === 0 ? (
                        <>
                        {/* renders the ChallengeCard component for each challenge  */}
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Challenges</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        
                        {challenges.map((item) => (
                        <ChallengeCard 
                            key={item.challengeId}
                            challenge={item}
                            handlePress={() => handleChallengeCardPress(item)} 
                        />))}
                        
                        </ScrollView>
                        </>
                        
                        ) : ( // checks the user has friends
                            friends.length === 0 ? (
                            <>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Friends</Text>
                            </View>
                            <Text style={styles.text}>Add friends first to challenge them</Text>
                            </>
                        ) : (
                            <>
                        {/* renders the FriendCard component for each friend  */}
                        <View style={styles.header}>
                            <Text style={styles.headerTitleFriends}>Friends</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        {filteredUsers.map((item) => (
                        <FriendCard 
                            key={item.userId}
                            friend={item}
                            handlePress={() => handlePress(item.userId)} 

                        />))}
                        </ScrollView>
                        </>
                        ))}

                </View>
            </View>
        </LinearGradient>
        </SafeAreaView>
    )
}

export default Challenges;