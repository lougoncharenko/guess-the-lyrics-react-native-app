import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    text: string
}

const FirstLine = (props:Props) => {
  return (
      <View style= {styles.fieldset}> 
        <Text>
            {props.text}
        </Text> 
      </View>
    
  );
}

const styles= StyleSheet.create({
    fieldset: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid'
    }

})

export default FirstLine;
