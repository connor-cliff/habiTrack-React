import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from './search.styles'
import { ScrollView } from 'react-native-gesture-handler'

const FriendSearch = () => {
    const { post } = useLocalSearchParams();

    const router = useRouter();

    const [refreshing, setRefreshing] = useState(false);
    const error = false;
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension={"70%"}
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <>
            <View style={styles.pageContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Showing results for: </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>{post}</Text>
                </View>
            </View>
            </>

            <View style={styles.pageContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {refreshing ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />

                    // checks for any errors 
                ) : error ? (
                    <Text style={styles.text}>Something went wrong</Text>

                    // renders placeholder if friends is empty 
                ) : post.length === 0 ? (
                    <Text style={styles.text}>Search for friends to track habits together!</Text>
                ) : (

                    // renders the FriendCard component for each habit 
                    post.map((item, index) => (
                    <FriendCard 
                        key={item.userId}
                        friend={item}
                        handleNavigate={() => router.push({pathname: `/friends/${item.id}`, params: { post: item.id } })} 

                    />
                    )))}
                    
                
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default FriendSearch