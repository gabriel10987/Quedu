import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import colors from "../../../src/colors";

export const Alternative = ({ text, onSelect, selected }) => {
  return (
    <Pressable onPress={onSelect} style={[styles.container, selected && styles.selected]}>
      <View style={styles.circle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
    minWidth: '85%',
    backgroundColor: colors.white,
    marginBottom: 5,
    borderRadius: 4,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.darkBlue, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.darkBlue, 
  },
  text: {
    flex: 1,
    flexShrink: 1, 
    fontSize: 10,
    fontFamily: 'Quicksand-Regular',
    color: '#333',
  },
  selected: {
    backgroundColor: colors.whi,
  },
});
