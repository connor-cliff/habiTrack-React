import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, Button, TouchableOpacity, RefreshControl, TextInput, FlatList } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallBack, useState } from 'react';

import { AddHabitFooter, IconSelection, ScreenHeaderBtn, Reminder } from '../../../components';
import { COLORS, icons, SIZES } from '../../../constants';
import styles from "../auth.style";
import useFetch from '../../../hook/useFetch'; 



const Login = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { data } = useFetch('user', {habitId: params.id});

  const handleLogin = () => {

    console.log(data);
    if (!email || !pass) {
      console.log('Please complete all fields'); // You can also show an alert
      return;
    }

    const userExists = data.some((d) => d.email === email && d.pass === pass);

    console.log(userExists)
    console.log(email)
    console.log(data.email)
    console.log(pass)
    console.log(data.pass)


    if (userExists) {
      console.log('User exists');
      // Handle successful login 
      router.push('/'); 
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