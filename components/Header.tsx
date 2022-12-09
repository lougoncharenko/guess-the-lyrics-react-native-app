import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style = {styles.heading}> Guess The Lyrics</Text>
        <Image 
        style = {styles.image}
        source = {{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snERfT36_-ejP2Knz3U1AeYIavkIqG3mSb0paHULk1sLAn62DWcBr0tCIsh0D4UQmM&usqp=CAU'
        }}
        />
    </View>
  );
}

const ArtistChoice = () => {
    const [artist, setArtist] = useState<string>('')
    return (
      <View>
         <Text>Select an Artist</Text>
         <Picker
            selectedValue={artist}
            onValueChange={(itemValue, itemIndex) =>
                setArtist(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
     
      </View>
    
  
    )
  }

const styles = StyleSheet.create( {
    container: {
        alignItems: 'center'
    },
    heading: {
        fontSize: 40,
        textShadowColor: 'pink', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5,  
        paddingBottom: 20,
    }, 
    image: {
        width:  300,
        height: 400,
    },
    picker: { 
        height: 50, 
        width: 150,
    },
})

export default Header;
