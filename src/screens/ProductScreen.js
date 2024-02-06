import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import{ChevronLeftIcon,StarIcon as SatrOutline, MinusIcon,PlusIcon} from 'react-native-heroicons/outline'
import{ShoppingBagIcon, StarIcon as StarSolid} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'


const ProductScreen = (props) => {
    const item = props.route.params
    const navigation = useNavigation()
  return (
   
    <View>
        <StatusBar style='dark'/>
    <SafeAreaView>
        <View className='flex-row justify-between items-center mr-4'>
        {/* Forma para voltar para a pagina anterior usando goBack */}
            <TouchableOpacity onPress={()=>navigation.goBack()} className='flex-row gap-2 items-center ml-2'>
                <ChevronLeftIcon size={24} color='black'/>
                <Text className='text-xl'>Details</Text>
            </TouchableOpacity>
            <ShoppingBagIcon size={24} color='#FCBA1E'/>
        </View>

        <View className='justify-center items-center mt-8'>
            <Image source= {item.image} className='w-[350] h-[300]'/>
        </View>

        <View className='bg-[#E50001] rounded-xl w-full h-full mt-3'>
            <View className='ml-6 '>
                <Text className='font-extrabold text-5xl text-white mt-8'>BBQ Wrap</Text>
            </View>

           <View className='flex-row items-center gap-1 ml-5'> 
                <StarSolid size={24} color='#FFB300'/>
                <StarSolid size={24} color='#FFB300'/>
                <StarSolid size={24} color='#FFB300'/>
                <StarSolid size={24} color='#FFB300'/>
                <SatrOutline size={24} color='#FFB300'/>
                <Text className='font-extrabold text-white'>4.5</Text>

            <View className='bg-white rounded-lg absolute right-4 items-center p-1'>
                <Text className='text-[#E50001] font-mono'>10-15Mints</Text>
            </View>
            </View>
           
            <View className='mt-7 mx-5'>
                <Text className=' text-white text-xl'>{item.desc}</Text>

            </View>
            <View className='flex-row justify-between items-center mt-7'> 
                <View className=' ml-6'>
                    <Text className='text-white font-extrabold text-xl'>${item.price}</Text>
                </View>
                <View className='flex-row mr-6 items-center justify-center'>
                    <View className='bg-white rounded-xl'>
                        <MinusIcon size={24} color='#E50001'/>
                    </View>
                    <View className=''>
                        <Text className='text-white font-bold text-xl mx-2'>1</Text>
                    </View>
                    <View className='bg-white rounded-xl '>
                        <PlusIcon size={24} color='#E50001'/>
                    </View>
                </View>
            </View>

                <View className='flex-row bg-white justify-center items-center mx-[100] mt-[50] p-4 rounded-xl'>
                    <Text className='text-2xl font-bold mr-3'>Add to card</Text>
                    <ShoppingBagIcon size={30} color='#FCBA1E'/>
                </View>



        </View>
    </SafeAreaView>
    </View>
  )
}

export default ProductScreen