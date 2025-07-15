import React from 'react'
import { Image, TextInput, View, StyleSheet,Text } from 'react-native'

export default function Forms_profile() {
  return (
    <View style ={{alignItems:'center'}}>
        
        <Image source={{uri:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"}}
        style={{width:150,height:350,borderRadius:50}}/>

        <View> 
            <Text>NPM:</Text>
            <TextInput placeholder='input your npm'
            style={styles.inputt}
            keyboardType='numeric'
            />    
        </View>   
       
        <View> 
            <Text>fullname:</Text>
            <TextInput placeholder='input your name'
            style={styles.inputt}/>    
        </View>   
       
        <View> 
            <Text>address:</Text>
            <TextInput placeholder='input your address'
            style={styles.inputtt}/>    
        </View>   
    </View>
    
    
  )
}
const styles =StyleSheet.create({
    inputt:{
        width:300,
        height:40,
        borderWidth:1,
        borderColor:"blue",
        borderRadius:5,
        paddingHorizontal:10,
        backgroundColor:"lightgray",
        marginTop:10,
    },
    inputtt:{
        width:300,
        height:100,
        borderWidth:1,
        textAlignVertical:"top",
        borderColor:"blue",
        borderRadius:5,
        paddingHorizontal:10,
        backgroundColor:"lightgray",
        marginTop:10,
    },
}
)