import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomePage({ navigation }: HomePageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Send Payment"
          onPress={() => navigation.navigate('SendPayment')}
        />
        <Button
          title="Receive Payment"
          onPress={() => navigation.navigate('ReceivePayment')}
        />
        <Button
          title="Transaction History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});