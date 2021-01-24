import React from 'react';
import { View } from 'react-native';

class Flex_justifyContentSpaceBetween extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'space-between'}} >
                <View style={{ height: 50, width: 50, backgroundColor: 'red'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'green'}} />
                <View style={{ height: 50, width: 50, backgroundColor: 'blue'}} />
                <View style={{ height: 50, width: 50 }} />
            </View>
        )
    }
}

export default Flex_justifyContentSpaceBetween;
