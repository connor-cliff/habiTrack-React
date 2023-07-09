import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TextInput, FlatList } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallBack, useState } from 'react';

import { Footer, IconSelection, ScreenHeaderBtn, Reminder } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from "../habits/habits.style";


const EditHabit = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [streak, setStreak] = useState("");

  const data = null;
  const isLoading = false;
  const error = null;

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
                      <Text style={styles.fieldName}>Streak</Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.userInput}
                          value={streak}
                          onChangeText={(text) => setStreak(text)}
                          keyboardType='numeric'
                        />
                      </View>
                    </View>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Icon</Text>
                    </View>
                    <View style={styles.iconInputContainer}>
                      <IconSelection />
                    </View>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Reminder</Text>
                    </View>
                    <View>
                    <Reminder />
                    </View>
                  </View>

                </View>
              
              <Footer icon={"Complete"} handleNavigate={() => router.push('/')}/>
            </>
    </SafeAreaView>
  )
}

export default EditHabit;