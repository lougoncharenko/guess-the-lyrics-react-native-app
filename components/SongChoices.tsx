import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const ArianaSongs = () => {
    const [song, Setsong] = useState('');
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
        </View>
    )
}

export const TaylorSongs = () => {
    return(
        <View>
            
        </View>
    )
}