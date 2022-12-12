import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ariana, taylor } from './ArtistInformation';
import FirstLine from './FirstLine';
import GuessingForm from './GuessingForm';

interface Props {
    hide: boolean
}

export const ArianaSongs = (props:Props) => {
    const [firstLine, setFirstLine] = useState('Choose an Song to display a first line')
    const [song, Setsong] = useState('');
    const [guessFormVisibility, setGuessFormVisibility] = useState<boolean>(false)
    const handleChange = (itemValue: string) => {
        Setsong(itemValue)
        if (itemValue === 'side') {
            setFirstLine(ariana.firstLyrics[0])
        } else if (itemValue === 'seven') {
            setFirstLine(ariana.firstLyrics[1])
        } else if (itemValue === 'nasa') {
            setFirstLine(ariana.firstLyrics[0])
        } else {
            setFirstLine('Choose an Song to display a first line')
        } 
        setGuessFormVisibility(true)
    }
    if (props.hide === false) {
        return null;
    }
    return(
        <View>
         <Picker
            selectedValue={song}
            onValueChange={(itemValue, itemIndex) =>
                handleChange(itemValue)
            }>
            <Picker.Item label="Pick A Song:" value="default"  />
            <Picker.Item label="Side to Side" value="side" />
            <Picker.Item label="7 Rings" value="seven" />
            <Picker.Item label="NASA" value="nasa" />
         </Picker>
         <FirstLine text={firstLine}/>
         <GuessingForm hide={guessFormVisibility} song={song}/>
        </View>
    )
}

export const TaylorSongs = (props:Props) => {
    const [firstLine, setFirstLine] = useState('Choose an Artist to display a first line')
    const [song, Setsong] = useState('');
    const [guessFormVisibility, setGuessFormVisibility] = useState<boolean>(false)
    const handleChange = (itemValue: string) => {
        Setsong(itemValue)
        if (itemValue === 'love') {
            setFirstLine(taylor.firstLyrics[0])
        } else if (itemValue === 'bad') {
            setFirstLine(taylor.firstLyrics[1])
        } else if (itemValue === 'enchanted') {
            setFirstLine(taylor.firstLyrics[0])
        } else {
            setFirstLine('Choose an Song to display a first line')
        } 
        setGuessFormVisibility(true)
    }
    if (props.hide === false) {
        return null;
    }
    return(
        <View>
         <Picker
            selectedValue={song}
            onValueChange={(itemValue, itemIndex) =>
                handleChange(itemValue)
            }>
            <Picker.Item label="Pick A Song:" value="default"  />
            <Picker.Item label="Love Story" value="love" />
            <Picker.Item label="Bad Blood" value="bad" />
            <Picker.Item label="Enchanted" value="enchanted" />
         </Picker>
         <FirstLine text={firstLine} />
         <GuessingForm hide={guessFormVisibility} song={song} />
        </View>
    )
}