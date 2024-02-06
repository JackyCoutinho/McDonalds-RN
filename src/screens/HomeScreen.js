import { View, Text, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {ShoppingBagIcon,MagnifyingGlassIcon,MapPinIcon,PlusCircleIcon} from 'react-native-heroicons/solid'
import {HeartIcon} from 'react-native-heroicons/outline'
import { StatusBar } from 'expo-status-bar'
import{categories, productItems} from '../constants'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const navigation = useNavigation()
  return (
    <View>
        <StatusBar style='dark'/>
        <SafeAreaView>
        <View className=" flex-row justify-between items-center m-5">
            <Image source={require('../../assets/images/mcdonalds-logo.png')}
            className="w-[50] h-[50]" 
            
            />
            <Text className="font-bold text-red-700 text-lg">McDonalds</Text>
            <ShoppingBagIcon size={24} color='#FCBA1E'/>
        </View>
        
        <View className="flex-row border ml-5 mr-5 p-2 rounded-lg "> 
            <MagnifyingGlassIcon size={20} color='#000000'/>
            <TextInput className='ml-1' placeholder='Search Your Burguer'></TextInput>
        </View>

        <View className="bg-[#FFE39F] h-[77] p-1 mt-6 mx-5 rounded-md ">
            <View className="flex-row ml-2 mt-1">      
                <Text className="text-black text-xl">We Keep </Text>
                <Text className="text-black font-bold text-xl">McDonald's</Text>  
            </View>
                <Text className="text-black text-xl ml-2 mt-1 mb-1">Restaurant Clean and Safe</Text>

            <Image source={require('../../assets/images/mcsmiles.png')}
            className="w-[83] h-[110] absolute right-0 top-[-28]"
            />
            <View className='flex-row justify-between items-center mt-6 '>
                <Text className='font-bold text-2xl '>Menu</Text>
                <View className="flex-row p-2 rounded-full bg-[#E50001]">
                    <MapPinIcon size={20} color='white'/>
                    <Text className='ml-1 mt-1 md-1 font-bold text-white'>Where is your location?</Text>
                </View>
            </View>

        </View>

        <View className="px-5 mt-[80]">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-gray-700';
              return (
                <TouchableOpacity 
                onPress={()=> setActiveCategory(item.id)}
                style={{backgroundColor: isActive? '#FCBA1E': 'rgba(0,0,0,0.07)'}} 
                className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>


        <View className="px-5 mt-[40]">
          <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between'}}
            className='mx-4'
            data={productItems}
            keyExtractor={item=> item.id}
            renderItem={({item})=>{
              return (
                <TouchableOpacity onPress={()=>navigation.navigate('Product',{...item})}> 
                    <View className='bg-neutral-200 rounded-xl mb-3 w-[172] justify-center items-center '>
                        <View className='absolute right-2 top-2'>
                             <HeartIcon size={24} color='black'></HeartIcon>
                        </View>
                        <Image className='w-36 h-36' source={item.image}/>

                        <View className='justify-center items-center mb-2 '>
                            <Text>{item.name}</Text>
                            <Text className='text-[#E50001] font-bold'>${item.price}</Text>
                            <PlusCircleIcon size={24} color='black'></PlusCircleIcon>
                        </View>


                    </View>  
                </TouchableOpacity>
              )
            }}
          />
        </View>

        </SafeAreaView>


    </View>
  )
}

export default HomeScreen