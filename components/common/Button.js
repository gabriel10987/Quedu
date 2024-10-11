import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import colors from "../../src/colors";

const Button = ({title, onPress, backgroundColor = '#2196F3', textColor = '#fff', style }) => {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: backgroundColor}, style]}
            onPress={onPress}
        >
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding:10,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Quicksand-Regular',
    },
});

export default Button;