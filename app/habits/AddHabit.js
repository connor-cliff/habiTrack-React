import { Text, View, SafeAreaView, TextInput } from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { useCallBack, useState } from 'react';

import { Footer, ScreenHeaderBtn } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from "../habits/habits.style";


const AddHabit = ({}) => {

  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [reminder, setReminder] = useState('');
  const streak = 0;

  const handleNavigate = () =>{

    // Check if name is left blank
    if (!name) {
      console.log('Please add a name'); // make an alert
      return;
    }

    const habit = { name, description, reminder, streak }

    // Save data to the database
    fetch("http://localhost:8080/api/v1/habit",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(habit)
    })

    router.push('/');
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