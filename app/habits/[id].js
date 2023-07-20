import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useNavigate, useLocalSearchParams, useSearchParams } from 'expo-router';
import { useCallBack, useState, useEffect } from 'react';
import axios from "axios";

import { ScreenHeaderBtn, Footer } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "../habits/habits.style";
import useFetch from '../../hook/useFetch';


const EditHabit = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data } = useFetch('habit', { habitId: params.id },)

  const [habit, setHabit] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [streak, setStreak] = useState(0);
  const [reminder, setReminder] = useState('');
  const current = parseInt(params.id);

const handleSave = () => {
      // Create the updated habit object with modified details
      const updatedHabit = { ...habit, name, description, reminder, streak };

      if (reminder === null){
              // Make an HTTP PUT request to update the habit in the database
        // only works if you change the reminder too because reminderr cannot be null
        fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?name=${name}&description=${description}&streak=${streak}`, {
          //fetch(`http://localhost:8080/api/v1/habit/${params.id}`, {
          method: "PUT",
          headers: {'Content-Type':'application/json',},
          body: JSON.stringify(updatedHabit),
          
        })
        router.push('/');
      } else {
              // Make an HTTP PUT request to update the habit in the database
        // only works if you change the reminder too because reminderr cannot be null
        fetch(`http://localhost:8080/api/v1/habit/${habit.habitId}?name=${name}&description=${description}&streak=${streak}&reminder=${reminder}`, {
          //fetch(`http://localhost:8080/api/v1/habit/${params.id}`, {
          method: "PUT",
          headers: {'Content-Type':'application/json',},
          body: JSON.stringify(updatedHabit),
          
        })

          router.push('/');
      }
    };

    const handleDelete = () => {
        // Make an HTTP DELETE request to delete the habit from the database
      fetch(`http://localhost:8080/api/v1/habit/${current}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
        
          router.push('/');
        })
        .catch(error => {
          console.error("Error deleting habit:", error);
          // Handle any error that may occur during the deletion
        });
    }


  useEffect(() => {
    if (data && data.length > 0) {
      setHabit(data[current]);
      setName(data[current].name);
      setDescription(data[current].description);
      setStreak(data[current].streak);
      setReminder(data[current].reminder);
    }
  }, [data, current]);

  
  
  const handleNavigate = () => {
    // PUT data here
    router.push(() => router.push('/'));
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
                ),
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
                      <Text style={styles.fieldName}>Streak</Text>
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
                      <Text style={styles.fieldName}>Delete habit</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                      <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.buttonText}>DELETE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>    
                </View>
              <Footer icon={"Complete"} handleNavigate={handleSave}/>
            </>
    </SafeAreaView>
  )
}

export default EditHabit;