import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Chat = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemText}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '100%',
  },
});

export default Chat;