import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Lihat Profil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg' }}
        style={styles.image}
      />
      <Text style={styles.text}>Nama: Adrian A.M</Text>
      <Text style={styles.text}>Email: Adrian@Gmail.com</Text>
    </View>
  );
};

export default function Nomer5() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  }
});