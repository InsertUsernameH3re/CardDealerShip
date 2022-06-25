import React, { useState} from 'react'
import {View,TextInput,Text,Button, LogBox} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './LoggedSites/StateProfile'
import Add from './LoggedSites/StateAdd'
import Feed from './LoggedSites/StateFeed'
import ImageContext from './ContextImage'
import ObjectContext from './ContextObject'
const Tab = createBottomTabNavigator();
const StateNav = () => {
const [object, setObject] = useState([])
const [image, setImage] = useState(null)

    
    return (
    <ObjectContext.Provider value={{object, setObject}}>
      <ImageContext.Provider value={{image,setImage}}>
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Log'>
            <Tab.Screen name="feed" component={Feed} />
            <Tab.Screen name="Log" component={Add} />
            <Tab.Screen name="reg" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
      </ImageContext.Provider>
    </ObjectContext.Provider>
    )

} 
export default StateNav;