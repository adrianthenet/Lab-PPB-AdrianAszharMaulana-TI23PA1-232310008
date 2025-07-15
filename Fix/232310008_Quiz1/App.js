import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rfc from './components/Rfc';
import Rcc from './components/Rfc';
import FormPendaftaran from './components/Rfc';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Rfc/>
      <Rcc/>
      <FormPendaftaran></FormPendaftaran>
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
