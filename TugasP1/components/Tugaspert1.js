import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const Tugaspert1 = () => {
    return (
        <View style={styles.container}>
        <Image 
          source={{ uri: 'https://imgcdn.stablediffusionweb.com/2024/4/1/1ed66ea1-f2e1-4cdf-99f8-ff71aad5393b.jpg' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Nama: Adrian Aszhar Maulana</Text>
        <Text style={styles.bio}>NPM: 232310008</Text>
        <Text style={styles.bio}>Angkatan: TI-23-PA1</Text>
        <Text style={styles.university}>University: IBIK KESATUAN</Text>
        <StatusBar style="auto"/>
      </View>
    );
  };

export default Tugaspert1;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "blue",
      width: 400,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: 'white',
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'white',
    },
    bio: {
      fontSize: 15,
      color: 'white',
      fontFamily: 'sans-serif-medium',
    },

    university: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        
      },
  });