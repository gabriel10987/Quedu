import React from "react";
import { View, StyleSheet } from "react-native";
import { EmptyList } from "./EmptyList";
import { SectionHeader } from "./SectionHeader";
import { List } from "./List";

export const Section = ({ name, color, icon1, icon2, data = [], onItemPress, section, onIcon1Press, onIcon2Press, onCourseDeleted }) => {
  return (
    <View style={styles.container}>
      <SectionHeader
        name={name}
        color={color}
        icon1={icon1}
        icon2={icon2}
        onIcon1Press={onIcon1Press}
        onIcon2Press={onIcon2Press}
      />
      {data.length === 0 ? (
        <EmptyList section={section} />
      ) : (
        <List data={data} onItemPress={onItemPress} section={section} onCourseDeleted={onCourseDeleted} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: "85%",
    borderRadius: 4,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
  }
});
