import React from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";

const MyActivityIndicator = () => {
    return (
        <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
}
const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MyActivityIndicator;
