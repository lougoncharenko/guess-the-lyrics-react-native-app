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
    <View style={styles.container}>
        <View style={styles.fieldset}>
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
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    fieldset: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        justifyContent: 'center',
        width: '80%',
    },
  });

export default GuessingForm;
