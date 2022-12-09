import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ariana, taylor } from './ArtistInformation';
import FirstLine from './FirstLine';
import { ArianaSongs, TaylorSongs } from './SongChoices';

export const Header = () => {
    const [artistImage, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snERfT36_-ejP2Knz3U1AeYIavkIqG3mSb0paHULk1sLAn62DWcBr0tCIsh0D4UQmM&usqp=CAU')
    const [artist, setArtist] = useState<string>('')
    const [arianaVisibility, setArianaVisibility] = useState<boolean>(false)
    const [taylorVisibility, setTaylorVisibility] = useState<boolean>(false)
    const changeImage = (itemValue:string) => {
        setArtist(itemValue)
        if (itemValue ==='ariana'){
            // alert('ariana')
            setImage(ariana.images[0])
        } else if (itemValue === 'taylor'){
            // alert('taylor')
            setImage(taylor.images[0])
        } else if (itemValue === 'default') {
            setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5snERfT36_-ejP2Knz3U1AeYIavkIqG3mSb0paHULk1sLAn62DWcBr0tCIsh0D4UQmM&usqp=CAU')
        }
    }
    return (
      <View>
          <View style= {styles.container}>
          <Text style = {styles.heading}> Guess The Lyrics</Text>
             <Image 
                style = {styles.image}
                source = { {uri: artistImage }}
             /> 
          </View>
        
         <Picker
            selectedValue={artist}
            onValueChange={(itemValue, itemIndex) =>
            changeImage(itemValue)
            }>
            <Picker.Item label="Pick An Artist:" value="default"  />
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

