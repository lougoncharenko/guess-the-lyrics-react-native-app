import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FirstLine from './FirstLine';

interface Props {
    hide: boolean
}

export const ArianaSongs = (props:Props) => {
    const [firstLine, setFirstLine] = useState('Choose an Artist to display a first line')
    const [song, Setsong] = useState('');
    if (props.hide) {
        return null;
    }
    return(
        <View>
         <Picker
            selectedValue={song}
            onValueChange={(itemValue, itemIndex) =>
                Setsong(itemValue)
            }>
            <Picker.Item label="Pick A Song:" value="default"  />
            <Picker.Item label="Side to Side" value="side" />
            <Picker.Item label="7 Rings" value="seven" />
            <Picker.Item label="NASA" value="nasa" />
         </Picker>
         <FirstLine text={firstLine}/>
        </View>
    )
}

export const TaylorSongs = (props:Props) => {
    const [firstLine, setFirstLine] = useState('Choose an Artist to display a first line')
    const [song, Setsong] = useState('');
    if (props.hide) {
        return null;
    }
    return(
        <View>
         <Picker
            selectedValue={song}
            onValueChange={(itemValue, itemIndex) =>
                Setsong(itemValue)
            }>
            <Picker.Item label="Pick A Song:" value="default"  />
            <Picker.Item label="Love Story" value="love" />
            <Picker.Item label="Bad Blood<" value="bad" />
            <Picker.Item label="Enchanted" value="enchanted" />
         </Picker>
         <FirstLine text={firstLine}/>
        </View>
    )
}