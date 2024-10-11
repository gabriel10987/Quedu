import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import colors from "../../../src/colors";

export const Alternative = ({ text, onSelect, selected, style, disabled, correct }) => {
  const getStyles = () => {
    if (disabled) {
      if (correct) return styles.correctAnswer;
      if (selected && !correct) return styles.incorrectAnswer;
    }
    return selected ? styles.selected : styles.default;
  };

  return (
    <Pressable 
      onPress={onSelect} 
      style={[styles.container, getStyles()]}
      disabled={disabled}
    >
      <View style={[styles.circle, getStyles()]}>
        {selected && <View style={[styles.innerCircle, getStyles()]} />}
      </View>
      <Text style={[styles.text, getStyles()]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 4,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
  },
  default: {
    backgroundColor: colors.white,
    borderColor: colors.darkBlue,
  },
  selected: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.darkBlue,
  },
  correctAnswer: {
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderColor: 'green',
  },
  incorrectAnswer: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderColor: 'red',
  },
});