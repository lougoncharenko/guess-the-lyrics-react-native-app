import React from 'react'
import { View, Text } from 'react-native'

interface Props {
    results: string
}

const Results = (props:Props) => {
  return (
    <View>
        <Text> {props.results} </Text>
    </View>
  )
}

export default Results