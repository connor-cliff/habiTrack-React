import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

import { COLORS, icons} from "../constants";
import styles from "./auth/auth.style";
import useFetch from '../hook/useFetch'; 

const App = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
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
  
      // remove remove remove
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
                headerTitle: ""
              }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false}> 
                 <View style={styles.pageContainer}>
                  <View style={styles.titleContainer} >
                    <Text style={styles.habi}>habi</Text>
                    <Text style={styles.track}>T</Text>
                    <Text style={styles.habi}>rack</Text>
                  </View>

                  <View>
                  <View style={emailFocused ? styles.inputContainerFocused : styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                      <Image source={icons.mail} style={styles.icon} />
                        <TextInput
                          style={styles.userInput}
                          value={email}
                          placeholder='Email'
                          onChangeText={(text) => setEmail(text)}
                          onFocus={() => setEmailFocused(true)}
                          onBlur={() => setEmailFocused(false)}
                        />
                      </View>
                    </View>
                  </View>

                  <View>
                  <View style={passFocused ? styles.inputContainerFocused : styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                      <Image source={icons.padlock} style={styles.icon} />
                        <TextInput
                          style={styles.userInput}
                          value={pass}
                          placeholder='Password'
                          onChangeText={(text) => setPass(text)}
                          secureTextEntry={true}
                          onFocus={() => setPassFocused(true)}
                          onBlur={() => setPassFocused(false)}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.forgottenContainer}>
                    <View style={styles.forgottenWrapper}>
                      <TouchableOpacity>
                        <Text style={styles.forgottenText}>Forgotten password?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View>
                      <TouchableOpacity onPress={handleLogin} style={styles.loginContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                      </TouchableOpacity>
                  </View>

                    <View style={styles.signupWrapper}>
                    <Text style={styles.signupText}>Dont have an account?</Text>
                    <TouchableOpacity onPress={() => router.push({
                      pathname: 'auth/SignUp',
                      params: { handleRefresh }})}>
                        <Text style={styles.signupText2}>Signup here</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

              </ScrollView>
            </>
    </SafeAreaView>
  )
}

export default App;