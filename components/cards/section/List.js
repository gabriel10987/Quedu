import React from "react";
import { View, StyleSheet } from "react-native";
import { SectionCard } from "./SectionCard";

export const List = ({ data, onItemPress }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <SectionCard
          key={index}
          name={item.name}
          date={item.date}
          onPress={() => onItemPress(item)} // Al hacer clic, se llama a onItemPress con el curso seleccionado
        />
      ))}
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
  },
});
