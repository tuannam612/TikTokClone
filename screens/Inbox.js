// Inbox.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Message from '../components/Message';
import messages from '../data/messageData';

export default function Inbox({children}) {
  const navigation = useNavigation(); 

  // Function to handle message press
  const handlePressMessage = (messageId) => {
    // Navigate to the InboxDetail screen with the messageId as parameter
    navigation.navigate('InboxDetail', { messageId });
  };

  const renderItem = ({ item }) => (
    <Message
      message={item.text}
      onPress={() => handlePressMessage(item.id)} // Pass messageId to handlePressMessage
    />
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
