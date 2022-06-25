import React, {useContext, useState} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import StateContext from './Context';
import { addUserData } from "./Firebase/addUserData.js";


const StateRegister = () => {
    const {state, setState} = useContext(StateContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (

        <View>
        <Text>Zadej Jmeno</Text>
        <TextInput style={{height: 40,margin: 12,borderWidth: 1,padding: 10,}} onChangeText={setName}/>
        <Text>Zadej email</Text>
        <TextInput style={{height: 40,margin: 12,borderWidth: 1,padding: 10,}} onChangeText={setEmail}/>
        <Text>Zadej Heslo</Text>
        <TextInput style={{height: 40,margin: 12,borderWidth: 1,padding: 10,}} onChangeText={setPassword}/>

        <Button title='Publish' onPress={()=>{          //ulozi dane informace do databaze  ---- potom presmeruje na StateLoggin.js
                const datas = {
                    username: name,
                    password: password,
                    email: email
                };
                addUserData(name, datas);
            setState(1)
        }}/>

        </View>
    )

} 
export default StateRegister;