import React, {useContext} from "react";
import {Text, View, Button} from 'react-native';
import StateContext from "../Context";

const Profile = () => {
    const {state, setState} = useContext(StateContext);
    return (
        <View>
        <Text>databze.icon</Text>
        <Text>databze.description</Text>
        <Button title="log out" onPress={()=> setState(1)}/>

        </View>
        )
    
}
export default Profile;