import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    text: string
}

const FirstLine = (props:Props) => {
  return (
      <View style={styles.container}>
        <View style= {styles.fieldset}> 
            <Text style={styles.firstLine}>
                {props.text}
            </Text> 
        </View>
      </View>
      
    
  );
}

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    fieldset: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        justifyContent: 'center',
        width: '80%',
    },
    firstLine: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default FirstLine;
