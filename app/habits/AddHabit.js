import { Text, View, SafeAreaView, TextInput } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { Footer, ScreenHeaderBtn } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "../habits/habits.style";

const AddHabit = ({}) => {

  const params = useLocalSearchParams() 
  const router = useRouter();
  const uid = params.uid;
  const uName = params.uName;

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

    // Navigate to the Home screen with the updated user data
    router.push({
      pathname: `/home/Home`, 
      params: { post: uid, uName: uName }});

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
                <View style={styles.pageContainer}>
                  <View style={styles.container}>
                    <Text style={styles.title}>Add a habit</Text>
                  </View>

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
    </SafeAreaView>
  )
}

export default AddHabit;