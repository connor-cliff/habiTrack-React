import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useLocalSearchParams  } from 'expo-router';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { ScreenHeaderBtn, Footer } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "../habits/habits.style";
import useFetch from '../../hook/useFetch';


const EditHabit = () => {

  // Get the "params" value from local search parameters using expo-router
  const params = useLocalSearchParams();
  const router = useRouter();
  const { data } = useFetch('habit', { habitId: params.id },)
  const uid = params.uid;
  const uName = params.uName;
  

  const [habit, setHabit] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [streak, setStreak] = useState(0);
  const [reminder, setReminder] = useState('');
  const currentId = parseInt(params.id);

  // refreshes habits after deletion
  const handleRefresh = () => {
    params.handleRefresh;
  }

  // Handled the "Complete" button click, updating the habit in the database
const handleSave = () => {

      // Create the updated habit object with modified details
      const updatedHabit = { ...habit, name, description, reminder, streak };

      // Updates the habit data in the database 
      if (reminder === null){ 
        fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?name=${name}&description=${description}&streak=${streak}`, {
          method: "PUT",
          headers: {'Content-Type':'application/json',},
          body: JSON.stringify(updatedHabit),
        })

        // Redirect to the Home screen after saving changes
        router.push({
          pathname: `/home/Home`, 
          params: { post: uid, uName: uName }});

    
      } else {

        // if reminder is also being changed then it is updated here because otherwise LocalTime variables cannot be null
        fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?name=${name}&description=${description}&streak=${streak}&reminder=${reminder}`, {
          method: "PUT",
          headers: {'Content-Type':'application/json',},
          body: JSON.stringify(updatedHabit),
        })

        // Redirect to the Home screen after saving changes
          router.push({
            pathname: `/home/Home`, 
            params: { post: uid, uName: uName }});
          
      }
    };

    // handles the "Delete" button click, deleting the habit from the database
    const handleDelete = () => {

      // Delete the habit from the database
      fetch(`http://localhost:8080/api/v1/habit/${currentId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        })
        .then(response => {
          router.push({
            pathname: `/home/Home`, 
            params: { post: uid, uName: uName }});
       
        })
        .catch(error => {
          console.error("Error deleting habit:", error);
          // Handle any error that may occur during the deletion
        });
    }

  // set the form fields with the habit details when data is fetched
  useEffect(() => {
    if (data && data.length > 0) {
      const habitIndex = data.findIndex((habit) => habit.habitId === currentId);
      if (habitIndex !== -1) {
        // Habit found, set the state 
        setHabit(data[habitIndex]);
        setName(data[habitIndex].name);
        setDescription(data[habitIndex].description);
        setStreak(data[habitIndex].streak);
        setReminder(data[habitIndex].reminder);
  
      } else {
        
        // Habit not found in data array
        console.log("Habit with habitId not found in data array");
      }
    }
  }, [data, currentId]);
  
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
                  <View style={styles.container}>
                    <Text style={styles.title}>Edit habit</Text>
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
                          onChangeText={setName}
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
                          onChangeText={setDescription}
                        />
                      </View>
                    </View>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Score</Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          // Convert the state value to a string to handle the case where it becomes NaN
                          value={streak.toString()} 
                          onChangeText={text => {
                            const parsedValue = parseInt(text);
                            // If it is NaN, set the state to 0, otherwise set the parsed value
                            setStreak(isNaN(parsedValue) ? 0 : parsedValue); 
                          }}
                          keyboardType='numeric'
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
                            onChangeText={setReminder}
                          />
                      </View>
                    </View>
                    </View>
                  </View>
                  
                  <View>
                  <View>
                    </View>
                    <View style={styles.buttonContainer}>
                      <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={() => {
                          handleDelete();
                          handleRefresh();
                        }}>
                        <Text style={styles.buttonText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>    
                </View>
              <Footer 
              icon={"Update"} 
              handleNavigate={handleSave}
              handleRefresh={handleRefresh}
              />
            </>
            </LinearGradient>
    </SafeAreaView>
  )
}

export default EditHabit;