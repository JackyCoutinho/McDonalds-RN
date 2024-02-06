import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline,UserIcon as UserOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid, UserIcon as UserSolid} from 'react-native-heroicons/solid';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeTabs(){
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => menuIcons(route, focused),
          tabBarStyle: {
            marginBottom:0,
            height: 75,
            alignItems: 'center',
            
            borderRadius:30,
            marginHorizontal: 0,
            backgroundColor: '#E50001',
  
          },
          tabBarItemStyle: {
            marginTop: 30,
            
          }
        })}
        
        >
        <Tab.Screen 
        name="home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused? <HomeSolid size="30" color="white" /> : <HomeOutline size="30" strokeWidth={2} color="white" />}
            </View>
          )
        }}
      />
        <Tab.Screen 
        name="favourite" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused? <HeartSolid size="30" color="white" /> : <HeartOutline size="30" strokeWidth={2} color="white" />}
            </View>
          )
        }}
      />
       <Tab.Screen 
        name="order" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className='bg-[#e50001] absolute top-[-70] rounded-full border-4 border-white'>
                
                <View className="justify-center items-center p-3">
                  {focused? <Ionicons name="restaurant-sharp" size={40} color="white"/> :<Ionicons name="restaurant-outline" size={24} color="white" />}
                </View>
                
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="cart" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused? <BagSolid size="30" color="white" /> : <BagOutline size="30" strokeWidth={2} color="white" />}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="profile" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="justify-center items-center top-0">
              {focused? <UserSolid size="30" color="white" /> : <UserOutline size="30" strokeWidth={2} color="white" />}
            </View>
          )
        }}
      />
        
      </Tab.Navigator>
    )
  }
export default AppNavigation;