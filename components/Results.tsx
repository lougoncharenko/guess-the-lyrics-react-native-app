import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    hide: boolean;
    results: string;
}

const Results = (props:Props) => {
  return (
    <View style={styles.container}>
    <View style= {styles.fieldset}> 
        <Text style  = {styles.heading}>Results:</Text>
        <Text style={styles.results}>
            {props.results}
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
heading: {
    textAlign: 'center',
    fontSize: 25,
},
results: {
    flexDirection: 'row',
    flexWrap: 'wrap',
}
})

export default Results