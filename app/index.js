import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

import { COLORS } from '../constants';
import styles from "./auth/auth.style";
import useFetch from '../hook/useFetch'; 

const App = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const error = false;

  // Updates the user information after signup 
  const handleRefresh = () => {
    setRefreshing(true);

    fetch(`http://localhost:8080/api/v1/user`)
      .then(res => res.json())
      .then(result => {
        
        setData(result)

        setRefreshing(false);
      })
      .catch(error => {
        console.error("Error refreshing data:", error);
        setRefreshing(false);
      });
  };

  const handleLogin = () => {

    // Check if the user exists in the database
    const userExists = data.some((d) => d.email === email && d.pass === pass);

    // checks mandatory fields have been compeleted
    if (!email || !pass) {
      console.log('Please complete all fields'); 
 
      return;
    }

     // If user exists, handles successful login
    if (userExists) {
      const loggedInUser = data.find((d) => d.email === email && d.pass === pass);
      const loggedInUserId = loggedInUser.userId;
      const loggedInUserName = loggedInUser.name;
  
      ////// remove remove remove
      global.currentUserId = loggedInUserId;
      global.currentUsersName = loggedInUser.name;

      // Take user to their home page
      router.push({
        pathname: '/home/Home', 
        params: { post: loggedInUserId, uName: loggedInUserName }}); 

    } else {

      console.log('Invalid email or password'); 

    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerTitle: ""
              }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false}> 
                 <View style={styles.pageContainer}>
                  <View style={styles.container}>
                    <Text style={styles.habitTracker}>HabiTrack</Text>
                    <Text style={styles.title}>Login</Text>
                  </View>

                  <View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={email}
                          placeholder='Email'
                          onChangeText={(text) => setEmail(text)}
                        />
                      </View>
                    </View>
                  </View>

                  <View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={pass}
                          placeholder='Password'
                          onChangeText={(text) => setPass(text)}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.buttonWrapper}>
                      <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => router.push({
                      pathname: 'auth/SignUp',
                      params: { handleRefresh }})}>
                        <Text style={styles.buttonText}>Go to sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </>
    </SafeAreaView>
  )
}

export default App;