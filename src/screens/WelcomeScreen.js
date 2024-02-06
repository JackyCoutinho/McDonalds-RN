import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-[#E50001] flex-1">
        
     <Image 
        source={require('../../assets/images/mcdonalds.png')}
        className="w-[450] h-[1000] absolute top-0"    
    />
        <SafeAreaView>
            <View className="justify-center items-center mt-[150]">
                <Image
                    source={require('../../assets/images/mcdonalds-logo.png')}
                    className="w-[350] h-[350]"
                />
            </View>
            <View className="justify-center items-center gap-12">
                <Text className="font-bold text-white text-3xl">Are you hungry?</Text>

            <View>
                <Text className=" text-white text-xl">McDonalds will delivery you</Text>
                <Text className=" text-white text-xl">a paradise for the pallate</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-black p-3 rounded-2xl">
                <Text className="font-bold text-white text-2xl mx-8">Let's order a meal</Text>
            </TouchableOpacity>

            </View>

        </SafeAreaView>

        </View>
  )
}

export default WelcomeScreen