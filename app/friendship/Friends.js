import { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

import { ScreenHeaderBtn, FriendCard } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./friends.style";

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

const Friends = () => {
 // Get the "post" value from local search parameters using expo-router
  const { post } = useLocalSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [noUsersFound, setNoUsersFound] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const error = false;


  // filters users based on the searched name
  const filterUsersByName = () => {
    if (!searchTerm) {
      setFilteredUsers([]); // If search term is empty, clear the filteredUsers list
      setSearchedUsers([]); // If search term is empty, clear the searchedUsers list
      setNoUsersFound(false);
      return;
    }
  
    const searched = users.filter((user) => {
      // removes potential case from the name 
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    setSearchedUsers(searched);

    // Check if there are no users found after searching
    if (searched.length === 0) {
      setNoUsersFound(true); 
    } else {
      setNoUsersFound(false);
  }
  };

    // Function to handle adding a friend
    const addFriend = (friendUserId) => {

      // sets the friendship object
      const friendship = { user1Id: post, user2Id: friendUserId };

      // add the friendship to the database
      fetch('http://localhost:8080/api/v1/friendship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(friendship),
      })
      .then(() => handleRefresh())

        .catch((error) => {
          // Handle any errors
          console.error('Error adding friend:', error);
        });
    };

    // Updates the friendship data after a refresh
    const handleRefresh = () => {
      setRefreshing(true);
      
      fetch(`http://localhost:8080/api/v1/friendship?userId=${post}`)
        .then(res => res.json())
        .then(result => {
          setFriends(result);

          setRefreshing(false);
        })
        .catch(error => {
          console.error("Error refreshing data:", error);
          setRefreshing(false);
        });
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
    filterUsersByName();
    setFilteredUsers(filtered);

  }, [friends, users, post, searchTerm]);

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
                        handlePress={() => router.push(`/menu/Menu/?post=${post}`)}
                    />
                  ),

                  }}
            />
            <>
              <View style={styles.pageContainer}>
                  <View style={styles.container}>
                    <Text style={styles.title}>Friends</Text>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Add friend</Text>
                    </View>
                    
                    <View style={styles.searchContainer}>
                      <View style={styles.searchWrapper}>
                        <TextInput
                          style={styles.searchInput}
                          value={searchTerm}
                          onChangeText={(text) => setSearchTerm(text)}
                          placeholder='Search...'
                        />
                      </View>

                      <TouchableOpacity 
                        style={styles.searchBtn} 
                        onPress={() => {
                            filterUsersByName();
                          }}>
                        <Image
                          source={icons.search}
                          resizeMode='contain'
                          style={styles.searchBtnImage}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                <View>
                  <View style={styles.friendContainer}>
                      <ScrollView showsVerticalScrollIndicator={false} style={styles.friendSearch}>
                      
                        {// Renders users found with the searched name
                          noUsersFound ? (
                        <Text style={styles.text}>No users found</Text>
                      ) : (
                        // renders the FriendCard component for each found user 
                        searchedUsers.map((item) => (
                          <FriendCard
                            key={item.userId}
                            friend={item}
                            handlePress={() => addFriend(item.userId)}
                            add={true}
                          />
                        ))
                      )}
                    </ScrollView>
                  </View>
                </View>

                <View>
                  <View style={styles.friendContainer}>
                    <View>
                      <Text style={styles.fieldName}>Friends list</Text>
                    </View>
                      <ScrollView showsVerticalScrollIndicator={false}>

                    {refreshing ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />

                        // checks for any errors 
                    ) : error ? (
                        <Text style={styles.text}>Something went wrong</Text>

                        // renders placeholder if friends is empty 
                    ) : friends.length === 0 ? (
                        <Text style={styles.text}>Search for friends to track habits together!</Text>
                    ) : (

                        // renders the FriendCard component for each friend 
                        filteredUsers.map((item) => (
                        <FriendCard 
                            key={item.userId}
                            friend={item}
                            handlePress={
                              () => router.push({
                                pathname: `/friendship/${item.userId}`, 
                                params: { post: item.userId } })} 
                            add={false}
                        />
                        )))}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </>
    </SafeAreaView>
  )
}

export default Friends;