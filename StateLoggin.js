import React, { useContext, useState} from 'react'
import {View,TextInput,Text,Button} from 'react-native'

import StateContext from './Context'



const StateLoggin = () => {
    const {state, setState} = useContext(StateContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <View>
        <Text>Zadej email</Text>
        <TextInput style={{height: 40,margin: 12,borderWidth: 1,padding: 10,}} onChangeText={setEmail}/>
        <Text>Zadej Heslo</Text>
        <TextInput style={{height: 40,margin: 12,borderWidth: 1,padding: 10,}} onChangeText={setPassword}/>

        <Button title='Log in' onPress={()=> {                  //kdyz ano zmeni stranku na logged in
            if (email === "admin" && password === "123"){
                setState(3);
            }
            else {
                console.log("neprihlasen");
            }
        }}/>

        <Button title='Register' onPress={()=>{                 // presuna na StateRegister.js
            setState(2);                
        }}/>
        </View>
    )

} 
export default StateLoggin;