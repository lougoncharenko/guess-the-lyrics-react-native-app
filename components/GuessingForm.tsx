import React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

const GuessingForm = () => {
  return (
    <View>
        <Text> Guess the Next Line: </Text>
        <TextInput></TextInput>
        <Pressable>
            <Text>Submit</Text>
        </Pressable>
    </View>
  );
}

export default GuessingForm;
