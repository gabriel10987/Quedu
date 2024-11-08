import { View, StyleSheet } from "react-native";
import { SectionCardCommunity } from "./SectionCardCommunity";

export const SectionCommunity = ({ data = [], onItemPress }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <SectionCardCommunity
          key={index}
          name={item.name}
          tests={item.tests}
          image={item.image}
          onPress={() => onItemPress(item)}
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
    borderRadius: 4,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
  }
});
