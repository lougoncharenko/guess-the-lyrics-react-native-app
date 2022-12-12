import React, {useState} from 'react';
import { View, TextInput, Pressable, Text, StyleSheet} from 'react-native';
import Results from './Results'

interface Props {
    hide: boolean;
    song: string;
}


const GuessingForm = (props:Props) => {
  const [secondGuess, setSecondGuess] = useState('');
  const [resultsVisibility, setResultsVisibility] = useState<boolean>(false);
  const handleClick = () => {
    console.log(secondGuess)
    setResultsVisibility(true);
  }
  if (props.hide === false) {
    return null;
  }
  return (
    <View style={styles.container}>
        <View style={styles.fieldset}>
            <Text style={styles.textGuess}> Guess the Next Line: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                onChangeText={setSecondGuess}
                value={secondGuess} 
                placeholder = 'Enter your guess here'
                />
                <Pressable 
                onPress= {handleClick}
                style={styles.button}>
                    <Text>Submit</Text>
                </Pressable>
            </View>
        </View>
        <Results hide = {setResultsVisibility} results = {secondGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    textGuess: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 90
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
