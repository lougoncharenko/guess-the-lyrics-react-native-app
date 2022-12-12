import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {ariana, taylor} from './ArtistInformation'

interface Props {
    hide: boolean;
    result: string
}

const Results = (props:Props) => {
  if (props.hide === false) {
        return null;
  }
  return (
    <View style={styles.container}>
    <View style= {styles.fieldset}> 
        <Text style  = {styles.heading}>Results:</Text>
        <Text style={styles.results}>
            {props.result}
        </Text> 
    </View>
  </View>
  

);
}

const styles= StyleSheet.create({
container: {
    margin: 30,
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