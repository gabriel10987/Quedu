import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import AppBar from "../../components/AppBar";
import { Section } from "../../components/cards/section/Section";
import colors from "../../src/colors";
import { ScrollView } from "react-native-gesture-handler";

const CourseDetailScreen = ({ route, navigation }) => {

  const { course } = route.params;
  const [quedus, setQuedus] = useState([]);

  useEffect(() => {
    // Simulate fetching Quedus
    const quedusData = [
      { name: "Quedu 1", date: "02/04" },
      { name: "Quedu 2", date: "03/04" },
      { name: "Quedu 3", date: "04/05" },
      { name: "Quedu 4", date: "05/07" },
      { name: "Quedu 5", date: "05/07" },
      { name: "Quedu 6", date: "05/07" },
      { name: "Quedu 7", date: "05/07" },
      { name: "Quedu 8", date: "05/07" },
      { name: "Quedu 9", date: "05/07" },
      { name: "Quedu 10", date: "05/07" },
      { name: "Quedu 11", date: "05/07" },
      { name: "Quedu 12", date: "05/07" },
      { name: "Quedu 13", date: "05/07" },
    ];
    setQuedus(quedusData);
  }, []);

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Section
          name={course.name}
          color={colors.lightBlue}
          icon1="bookmark"
          icon2="arrow-up"
          data={quedus}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default CourseDetailScreen;
