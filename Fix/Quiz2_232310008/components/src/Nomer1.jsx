import React from 'react'
import { SafeAreaView, View, Text, Image, Button, Alert } from 'react-native-web'

export default function Nomer2() {
  const handleMulai = () => {
    Alert.alert('Anda akan mulai Kuis')
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Halo Selamat Datang di Kuis React Native
        </Text>

        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740",
          }}
          style={{ width: 200, height: 300, marginBottom: 20 }}
        />

        <Button title="Klik Mulai" onPress={handleMulai} />
      </View>
    </SafeAreaView>
  )
}