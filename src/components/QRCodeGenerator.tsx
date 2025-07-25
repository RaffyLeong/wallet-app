import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View, Text, StyleSheet } from 'react-native';

type QRCodeGeneratorProps = {
  value: string;
  size?: number;
};

export default function QRCodeGenerator({ value, size = 200 }: QRCodeGeneratorProps) {
  return (
    <View style={styles.container}>
      <QRCode
        value={value}
        size={size}
      />
      <Text style={styles.text}>Scan this code to receive payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});