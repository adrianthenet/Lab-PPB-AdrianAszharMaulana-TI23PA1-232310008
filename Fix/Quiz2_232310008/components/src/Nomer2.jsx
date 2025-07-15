import React, { useState } from 'react';
import { View, Text, Button } from 'react-native-web';

const Nomer2 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Angka: {count}</Text>

      <Button title="+" onPress={increase} />
      <View style={{ height: 10 }} />
      <Button title="-" onPress={decrease} />

      {count > 10 && (
        <Text style={{ color: 'red', marginTop: 10 }}>
          Nilai maksimal tercapai.
        </Text>
      )}
    </View>
  );
};

export default Nomer2;