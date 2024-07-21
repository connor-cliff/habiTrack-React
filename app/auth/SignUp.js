import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { ScreenHeaderBtn } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./auth.style";

const SignUp = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const handleSignup = () => {

    // Check if any field is left blank
    if (!name || !email || !pass) {
      console.log('Please complete all fields'); 
      return;
    }

    // Create a user object with the input values 
    const user = { name, email, pass }

    // Save data to the database
    fetch("http://localhost:8080/api/v1/user",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(user)
    })

    // refresh user data with new user
    params.handleRefresh

    // Navigate to the home page after a succesful signup
    router.push('/')
};

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


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "",
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
                  
                  <View style={nameFocused ? styles.inputContainerFocused : styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                      <Image source={icons.user} style={styles.icon} />
                        <TextInput
                          style={styles.userInput}
                          value={name}
                          placeholder='Username'
                          onChangeText={(text) => setName(text)}
                          onFocus={() => setNameFocused(true)}
                          onBlur={() => setNameFocused(false)}
                        />
                      </View>
                    </View>

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

                  <View>
                      <TouchableOpacity onPress={handleSignup} style={styles.signupContainer}>
                        <Text style={styles.buttonText}>Signup</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.loginWrapper}>
                   <Text style={styles.signupText}>Already have an account?</Text>
                  <View >
                      <TouchableOpacity onPress={() => router.push({
                      pathname: '/',
                      params: { handleRefresh }})}>
                        <Text style={styles.signupText2}>Login here</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              </ScrollView>
              
            </>
    </SafeAreaView>
  )
}

export default SignUp;