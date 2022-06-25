import React, {useContext} from "react";
import {Text, ScrollView,View,Image, Button, StyleSheet} from 'react-native';
import ImageContext from "../ContextImage";
import ObjectContext from "../ContextObject";


const Feed = () => {
    
    const {image, setImage} = useContext(ImageContext);
    const {object, setObject} = useContext(ObjectContext);
    
    if (image !== null){
    const listItems = object.map((item) => 

    <View style={styles.items}>
    <Image source={{ uri: item.imageuri }}  style={styles.image} />
    <Text>Caption: {item.inputCaption}</Text>
    </View>
    
)
    return(
        
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffeecc'}}>
        <Text style={styles.headline}>Feed</Text>
        {listItems}
        </ScrollView>
    )

}
    else{
    return (
    <View>
    <Text style={styles.headline}>nic neni</Text>
    </View>
    )}
}
export default Feed;

const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        fontSize: 30,
        
    },
    items: {
        borderWidth:3,
        borderRadius: 25,
        paddingVertical: 6,
        marginBottom: 25,
        marginHorizontal: '20%',
        backgroundColor: '#FECD45',
        textAlign: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

elevation: 15,
    },

    image: {
        borderRadius: 25,
        flex: 1,
        height:100,
        width: 100,
        resizeMode: 'contain',
    }
})