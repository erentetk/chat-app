import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ContactRow from '../components/ContactRow';
import Seperator from '../components/Seperator';
import { useEffect } from 'react';


const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate('SingUp');
    }
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ContactRow
        name="Erenn TETİK"
        subtitle="Hi , I'm  waiting for you for dinner "
        onPress={() => {
          alert(`Hi, Erenn TETİK dokundu`)
        }}
      />

      <Seperator />

      <ContactRow
        name="Kübra TETİK"
        subtitle="Hi , How are you? "
        onPress={() => {
          alert('Hi ,Kübra dokundu')
        }}
      />
      <Seperator />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


});

export default Chats;