import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Message from '../components/Message';
import messages from '../data/messageData';

export default function Inbox({ children }) {
  const navigation = useNavigation();

  const handlePressMessage = (messageId) => {
    navigation.navigate('InboxDetail', { messageId });
  };

  const renderItem = ({ item }) => (
    <Message
      sender={item.text}
      message={item.details}
      onPress={() => handlePressMessage(item.id)}
    />
  );

  return (
    <View style={styles.flatList}>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={false}
        contentContainerStyle={{alignItems: "stretch"}}
        style={{width: "100%" }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  flatList: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1B1C21FF'
  },

})