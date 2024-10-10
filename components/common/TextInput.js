import React from "react";
import {TextInput, StyleSheet, View} from "react-native";
import colors from "../../src/colors";

const CustomTextInput = ({value, onChangeText, placeholder = 'Escribir', borderColor = '#ccc', style }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, {borderColor: borderColor, backgroundColor: colors.white, color: colors.darkBlue}, style]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.gray}
                backgroundColor={colors.white}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {width:0, height:4},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:5,
        marginBottom:30,
    },
    input: {
        height: 50,
        borderWidth:1,
        paddingHorizontal:15,
        borderRadius:10,
        color: '#000',
        fontFamily: 'Quicksand-Regular',
    },
});

export default CustomTextInput;