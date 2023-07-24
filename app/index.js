import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { COLORS, icons, SIZES } from '../constants';
import styles from "./auth/auth.style";
import useFetch from '../hook/useFetch'; 



const App = () => {
  const params = useLocalSearchParams();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { data } = useFetch('user', {userId: params.id});


  global.ip = "192.168.0.23";

  const handleLogin = () => {

    const userExists = data.some((d) => d.email === email && d.pass === pass);

    if (!email || !pass) {
      console.log('Please complete all fields'); // You can also show an alert
      return;
    }

    if (userExists) {
      const loggedInUser = data.find((d) => d.email === email && d.pass === pass);
      const loggedInUserId = loggedInUser.userId;
      // const loggedInUserName = loggedInUser.name;
  
      global.currentUserId = loggedInUserId;
      global.currentUsersName = loggedInUser.name;

      // Handle successful login 
      router.push({pathname: '/home/Home', params: { post: loggedInUserId }}); 

    } else {

      console.log('Invalid email or password'); // You can also show an alert
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