import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "../../src/colors";

const CustomDropdown = ({ options = [], selectedValue, onValueChange, borderColor = '#ccc', placeholder = 'Seleccionar', style }) => {
    const [selected, setSelected] = useState(selectedValue);

    return (
        <View style={[styles.dropdownContainer, style]}>
            <Picker
                selectedValue={selected}
                style={[styles.picker, {borderColor: borderColor, color: colors.darkBlue}]}
                onValueChange={(itemValue) => {
                    setSelected(itemValue);
                    onValueChange(itemValue);
                }}
            >
                <Picker.Item label={placeholder} value={null}/>
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width:0, height:4},
        shadowOpacity:0.2,
        shadowRadius:10,
        elevation:5,
        backgroundColor: colors.white,
    },
    picker: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 10,
        color: '#000',
        fontFamily: 'Quicksand-Regular',
        width: '100%',
    },
})

export default CustomDropdown;