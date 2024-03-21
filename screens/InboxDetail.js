import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import messages from '../data/messageData';
import SendMessageBar from '../components/SendMessageBar';
export default function InboxDetail() {
  const route = useRoute();
  const { messageId } = route.params;
  const messageConversation = messages.filter(message => message.id === messageId);

  const renderItem = ({ item }) => (
    <View style={[styles.messageBubble, item.sender === 'You' ? styles.yourMessage : styles.theirMessage]}>
      {typeof item.details === 'string' ? (
        <Text style={styles.messageText}>{item.details}</Text>
      ) : null}
    </View>
  );
  return (
    <SafeAreaView style={{backgroundColor: "#1B1C21FF"}}>
      <FlatList
        data={messageConversation}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        inverted
      />
      <SendMessageBar style={styles.messageBar}></SendMessageBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 10,
    alignContent: 'flex-end',
    
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  yourMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Your message bubble color
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA', // Their message bubble color
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },

});