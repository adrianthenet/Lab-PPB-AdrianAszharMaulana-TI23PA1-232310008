import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Nomer3 = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Adrian', npm: '232310008' },
    { id: '2', nama: 'Dicky', npm: '2323102123' },
    { id: '3', nama: 'Joshua', npm: '232310389' },
    { id: '4', nama: 'Astria', npm: '232310122' },
    { id: '5', nama: 'Daffa', npm: '232312u34' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswa}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  npm: {
    fontSize: 14,
    color: '#555',
  },
});

export default Nomer3;