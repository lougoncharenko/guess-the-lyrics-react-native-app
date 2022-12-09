import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const ArtistChoice = () => {
    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snERfT36_-ejP2Knz3U1AeYIavkIqG3mSb0paHULk1sLAn62DWcBr0tCIsh0D4UQmM&usqp=CAU')
    const [artist, setArtist] = useState<string>('')
    return (
    <View style={styles.container}>

    </View>
  );
}

export const Header = () => {
    const [image, setImage] = useState<any>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snERfT36_-ejP2Knz3U1AeYIavkIqG3mSb0paHULk1sLAn62DWcBr0tCIsh0D4UQmM&usqp=CAU')
    const [artist, setArtist] = useState<string>('')
    if (artist ==='ariana'){
        alert('ariana')
    } else if (artist === 'taylor'){
        alert('taylor')
    } else {
        console.log('hello')
    }
    return (
      <View>
          <View style= {styles.container}>
          <Text style = {styles.heading}> Guess The Lyrics</Text>
             <Image 
                style = {styles.image}
                source = { {image}
                }
             /> 
          </View>
        
         <Picker
            selectedValue={artist}
            onValueChange={(itemValue, itemIndex) =>
            setArtist(itemValue)
            }>
            <Picker.Item label="Pick An Artist:" value="default" />
            <Picker.Item label="Ariana Grande" value="ariana" />
            <Picker.Item label="Taylor Swift" value="taylor" />
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
    artistText: {
        textAlign: 'center',
        paddingTop: 40,
        fontSize: 20,
    }
})

