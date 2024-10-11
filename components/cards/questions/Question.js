import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../src/colors';


export const Question = ({ number, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    display: "flex",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.white,
    minWidth: "85%",
    borderRadius: 4,
  },
  numberContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  number: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
  },
  text: {
    flex: 1, 
    flexShrink: 1, 
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
    color: '#333',
  },
});
