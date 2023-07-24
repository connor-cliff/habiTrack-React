import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';

import { ScreenHeaderBtn } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./auth.style";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = () => {

    // Check if any field is left blank
    if (!name || !email || !pass) {
      console.log('Please complete all fields'); /* make this an alert */
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

    // Navigate to the home page after a succesful signup
    router.push('/')
};


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
                        handlePress={() => router.back()}
                    />
                ),}}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false}> 
                 <View style={styles.pageContainer}>
                  <View style={styles.container}>
                    <Text style={styles.habitTracker}>HabiTrack</Text>
                    <Text style={styles.title}>Sign Up</Text>
                  </View>

                  <View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={name}
                          placeholder='Name'
                          onChangeText={(text) => setName(text)}
                        />
                      </View>
                    </View>
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
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.buttonWrapper}>
                      <TouchableOpacity onPress={() => router.push('/')}>
                        <Text style={styles.buttonText}>Go to login</Text>
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