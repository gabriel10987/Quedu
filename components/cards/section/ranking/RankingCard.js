import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../../src/colors";

const RankingCard = ({ title, subtitle, first, second, third }) => {
  return (
    <View style={styles.rankingContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.podium}>
        <View style={styles.second}>
          <Text style={styles.textCenter}>{second}</Text>
          <View style={styles.second_block}></View>
        </View>
        <View style={styles.first}>
          <Text style={styles.textCenter}>{first}</Text>
          <View style={styles.first_block}></View>
        </View>
        <View style={styles.third}>
          <Text style={styles.textCenter}>{third}</Text>
          <View style={styles.third_block}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rankingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
    border: 1,
    borderRadius: 8,
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors.white,
    padding: 16,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlue,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlue,
    textAlign: "center",
  },
  podium: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 150,
    width: 300,
    padding: 16,
  },
  first: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 70,
    gap: 10,
  },
  first_block: {
    width: '100%',
    height: 120,
    backgroundColor: colors.feedback,
  },
  second: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 70,
    gap: 10,
  },
  second_block: {
    width: '100%',
    height: 70,
    backgroundColor: colors.feedback,
  },
  third: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 70,
    gap: 10,
  },
  third_block: {
    width: '100%',
    height: 50,
    backgroundColor: colors.feedback,
  },
  textCenter: {
    textAlign: "center",
  },
});

export default RankingCard;
