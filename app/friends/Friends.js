import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallBack, useState } from 'react';

import { ScreenHeaderBtn, FriendCard } from '../../components';
import { COLORS, icons } from '../../constants';
import styles from "./friends.style";


const Friends = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

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
                    <Text style={styles.title}>Friends</Text>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.fieldName}>Add friend</Text>
                    </View>
                    
                    <View style={styles.searchContainer}>
                      <View style={styles.searchWrapper}>
                        <TextInput
                          style={styles.searchInput}
                          value={searchTerm}
                          onChangeText={(text) => setSearchTerm(text)}
                          placeholder='Search...'
                        />
                      </View>

                      <TouchableOpacity 
                        style={styles.searchBtn} 
                        onPress={() => {
                          if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                          }
                        }}>
                        <Image
                          source={icons.search}
                          resizeMode='contain'
                          style={styles.searchBtnImage}
                        />
                      </TouchableOpacity>
                    </View>

                  </View>
                  
                  
                
                <View>
                  <View style={styles.friendContainer}>
                    <View>
                      <Text style={styles.fieldName}>Friends list</Text>
                    </View>
                      <ScrollView showsVerticalScrollIndicator={false}>
                      <FriendCard
                        userId={12345}
                        name={"John Jones"}
                      />
                      <FriendCard
                        userId={12346}
                        name={"Mikey Musumeci"}
                      />
                      </ScrollView>
                  </View>

                </View>
              
              </View>
            </>
    </SafeAreaView>
  )
}

export default Friends;