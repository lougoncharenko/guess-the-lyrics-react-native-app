import React, {useState} from 'react';
import { View, TextInput, Pressable, Text, StyleSheet} from 'react-native';

interface Props {
    hide: boolean
}


const GuessingForm = (props:Props) => {
  const [secondGuess, setSecondGuess] = useState('')
  if (props.hide === false) {
    return null;
  }
  return (
    <View>
        <Text> Guess the Next Line: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setSecondGuess}
          value={secondGuess} 
          placeholder = 'Enter your guess here'
        />
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
