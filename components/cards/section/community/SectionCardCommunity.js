import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../../src/colors";

export const SectionCardCommunity = ({ name, tests, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../../assets/images/img.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.detailCommunity}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.detailCommunityBottom}>
            <TouchableOpacity
              style={styles.buttonCourse}
              onPress={() => alert("Botón personalizado presionado")}
            >
              <Text style={styles.buttonCourseText}>Ver</Text>
            </TouchableOpacity>
            <Text style={styles.textTest}>
              {tests} {tests == 1 ? "Test" : "Tests"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.white,
    minWidth: "85%",
    borderRadius: 4,
    borderColor: colors.lightGray,
    border: 1,
    gap: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10,
    marginVertical: 5,
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlueOpacity50,
  },
  title: {
    fontSize: 12,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlue,
    },
  buttonCourse: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  buttonCourseText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Quicksand-Light",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  detailCommunity: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    width: "85%",
  },
  detailCommunityBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTest: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlueOpacity50,
  },
});
