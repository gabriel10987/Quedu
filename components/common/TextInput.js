import React from "react";
import {TextInput, StyleSheet, View} from "react-native";
import colors from "../../src/colors";

const CustomTextInput = ({value, onChangeText, placeholder = 'Escribir', borderColor = '#ccc', style, isPassword = false }) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[styles.input, {borderColor: borderColor, color: colors.darkBlue}]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.gray}
                secureTextEntry={isPassword}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width:0, height:4},
        shadowOpacity:0.2,
        shadowRadius:10,
        elevation:5,
        backgroundColor: colors.white,
    },
    input: {
        height: 50,
        borderWidth:1,
        paddingHorizontal:15,
        borderRadius:10,
        color: '#000',
        fontFamily: 'Quicksand-Regular',
        width: '100%',
    },
});

export default CustomTextInput;