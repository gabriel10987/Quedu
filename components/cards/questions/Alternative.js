import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import colors from "../../../src/colors";

export const Alternative = ({ text, onSelect, selected, disabled, correct }) => {
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
  },
  default: {
    backgroundColor: colors.white,
    borderColor: colors.darkBlue,
  },
  selected: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.white,
    color: colors.white,
  },
  correctAnswer: {
    borderColor: colors.success,
    color: colors.success,
    fontFamily: 'Quicksand-SemiBold',
  },
  incorrectAnswer: {
    borderColor: colors.error,
    color: colors.error,
    fontFamily: 'Quicksand-SemiBold',
  },
});