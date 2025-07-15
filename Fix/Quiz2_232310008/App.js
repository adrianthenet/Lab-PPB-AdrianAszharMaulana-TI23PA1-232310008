import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nomer1 from './components/src/Nomer1';
import Nomer2 from './components/src/Nomer2';
import Nomer3 from './components/src/Nomer3';
import Nomer4 from './components/src/Nomer4';
import Nomer5 from './components/src/Nomer5';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Nomer1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
