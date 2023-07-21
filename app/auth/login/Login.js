import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter, useSearchParams, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { COLORS, icons, SIZES } from '../../../constants';
import styles from "../auth.style";
import useFetch from '../../../hook/useFetch'; 



const Login = () => {
  const params = useLocalSearchParams();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { data } = useFetch('user', {userId: params.id});

  const handleLogin = () => {

    //console.log(data);
    if (!email || !pass) {
      console.log('Please complete all fields'); // You can also show an alert
      return;
    }

    const userExists = data.some((d) => d.email === email && d.pass === pass);
    const loggedInUser = data.find((d) => d.email === email && d.pass === pass);
    const loggedInUserId = loggedInUser.userId;

    global.currentUserId = loggedInUserId;

    console.log("currentUserId " + currentUserId)



    // console.log("--------------")
    // console.log("current userId: " + loggedInUserId)
    // console.log("--------------")



    /**
     * 
     * i need to get the correct user ID fro mthe user who is logging ing. i will thene use this ID to search all existing habits and only show those which hvae the matchng userID
     * 
     */

    if (userExists) {
      //console.log('User exists');
      // Handle successful login 
      router.push({pathname: '/', params: { post: loggedInUserId }}); 
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
                    <TouchableOpacity onPress={() => router.push('auth/sign-up/SignUp')}>
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

export default Login;