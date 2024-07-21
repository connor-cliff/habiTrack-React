import { Text, View, SafeAreaView, TextInput } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Footer, ScreenHeaderBtn } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "../habits/habits.style";

const AddHabit = () => {

  const params = useLocalSearchParams() 
  const router = useRouter();
  const uid = params.uid;
  const uName = params.uName;
  const handleRefresh = params.handleRefresh;

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [reminder, setReminder] = useState('');
  const streak = 0;
  
  // handles the navigation when the user completes adding a habit
  const handleNavigate = () =>{

    // Check if name is left blank
    if (!name) {
      console.log('Please add a name'); 

      return;
    }

    // Use the updated userId value after setUserId is processed
    const habit = { userId: uid, name, description, reminder, streak }

    // Save data to the database
    fetch("http://localhost:8080/api/v1/habit",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(habit)
    })
    .then(() => {
      if (handleRefresh) {
        handleRefresh;
    }
    // Navigate to the Home screen with the updated user data
    router.push({
      pathname: `/home/Home`, 
      params: { post: uid, uName: uName }});

})};

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
                        icon={icons.chevronLeft} 
                        dimension="100%"
                        handlePressMenu={() => router.back()}
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
            <>
                <View style={styles.pageContainer}>


                  <View>
                    <View>
                      <Text style={styles.fieldName}>Name</Text>
                    </View>
                    
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={name}
                          onChangeText={(text) => setName(text)}
                        />
                      </View>
                    </View>
                  </View>
                  
                  <View>
                    <View>
                      <Text style={styles.fieldName}>Description</Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={description}
                          onChangeText={(text) => setDescription(text)}
                        />
                      </View>
                    </View>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Reminder</Text>
                    </View>
                    <View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.userInput}
                            placeholder="HH:mm"
                            value={reminder}
                            onChangeText={(text) => setReminder(text)}
                          />
                      </View>
                    </View>
                    </View>
                  </View>
                </View> 
              
              <Footer 
              icon={"Complete"} 
              handleNavigate={handleNavigate}
              />
            </>
            </LinearGradient>
    </SafeAreaView>
  )
}

export default AddHabit;