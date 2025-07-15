import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Car from './components/Car';
import Motor from './components/Motor';
import Sepeda from './components/Sepeda';

export default function App() {
  const [a, setA] = useState('');

  return (
    <ImageBackground 
      source={{ uri: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/75/2024/09/08/images-3905720846.jpg" }}
      style={styles.bg}>
      
      <View style={styles.container}>
        <Text style={styles.text}>Woy Fadhil</Text>
        <Text>Sehat gak?</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Isi disini" 
          value={a} 
          onChangeText={setA} 
        />
        <Text>Jawaban: {a}</Text>
        <StatusBar style="auto" />
        
        <Car />
        <Motor />
        <Sepeda />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'green',
    fontSize: 38,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'blue',
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});