import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />

      <View style={styles.container}>

        <Text>HOME</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#7a3232',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70,
    paddingTop: 20,
    gap: 10,
  },
  container: {
    width: '95%',
    height: '95%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8
  },
});
