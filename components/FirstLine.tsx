import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FirstLine = () => {
  return (
      <View style= {styles.fieldset}> 
        <Text>

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
