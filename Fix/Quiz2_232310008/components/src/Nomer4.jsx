import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native-web';

const Nomer4 = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');

  const handleSubmit = () => {
    if (!nama || !email || !nomorHP) {
      Alert.alert('Peringatan', 'Semua field harus diisi!');
    } else {
      Alert.alert(
        'Data Terkirim',
        
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama lengkap"
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Nomor HP</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nomor HP"
        keyboardType="phone-pad"
        value={nomorHP}
        onChangeText={setNomorHP}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    maxWidth: 400,
    margin: 'auto',
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginTop: 4,
    marginBottom: 12,
    borderRadius: 4,
  },
});

export default Nomer4;