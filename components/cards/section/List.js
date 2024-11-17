import React from "react";
import { View, StyleSheet } from "react-native";
import { SectionCard } from "./SectionCard";
import { SectionCardCourse } from "./SectionCardCourse";
import moment from "moment";

export const List = ({ data, onItemPress, section, onCourseDeleted }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        section === "Quedus" ? (
          <SectionCard
            key={index}
            name={item.name}
            date={moment(item.date).format("DD/MM")}
            onPress={() => onItemPress(item)}
          />
        ) : section === "Cursos" ? (
          <SectionCardCourse
            key={index}
            name={item.name}
            courseId={item._id} 
            date={moment(item.date).format("DD/MM")}
            onPress={() => onItemPress(item)}
            onCourseDeleted={onCourseDeleted}
          />
        ) : null
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