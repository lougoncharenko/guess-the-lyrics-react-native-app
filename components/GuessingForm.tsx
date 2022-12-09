import React from 'react';
import { View, TextInput, Pressable, Text, StyleSheet} from 'react-native';

interface Props {
    hide: boolean
}


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

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default GuessingForm;
