import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { COLORS } from '../constants';
import styles from "./auth/auth.style";
import useFetch from '../hook/useFetch'; 

const App = () => {
  // Get the "post" value from local search parameters using expo-router
  const params = useLocalSearchParams();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { data } = useFetch('user', {userId: params.id});

  const handleLogin = () => {

    // Check if the user exists in the database
    const userExists = data.some((d) => d.email === email && d.pass === pass);

    // checks mandatory fields have been compeleted
    if (!email || !pass) {
      console.log('Please complete all fields'); 
      /* 
      You can also show an alert
       */
      return;
    }

     // If user exists, handles successful login
    if (userExists) {
      const loggedInUser = data.find((d) => d.email === email && d.pass === pass);
      const loggedInUserId = loggedInUser.userId;
  
      global.currentUserId = loggedInUserId;
      global.currentUsersName = loggedInUser.name;

      // Take user to their home page
      router.push({
        pathname: '/home/Home', 
        params: { post: loggedInUserId }}); 

    } else {

      console.log('Invalid email or password'); 
      /* 
      You can also show an alert
       */
    }
  };


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
                    <TouchableOpacity onPress={() => router.push('auth/SignUp')}>
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