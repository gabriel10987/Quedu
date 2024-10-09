import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Colors from '../../src/colors';

const Quedu = ({ quedu }) => {
    return (
        <View style={styles.queduContainer}>
            <Text style={styles.queduName}>{quedu.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    queduContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: Colors.gray,
        borderRadius: 5,
    },
    queduName: {
        fontFamily: "Quicksand-Medium",
        fontSize: 10,
    },
});

export default Quedu;
