import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppBar from "../../components/AppBar";
import RankingCard from "../../components/cards/section/ranking/RankingCard";
import colors from "../../src/colors";

const RankingScreen = ({ navigation }) => {
  const rankingTopContributors = [
    {
      id: 1,
      name: "Ana",
    },
    {
      id: 2,
      name: "Luis",
    },
    {
      id: 3,
      name: "Carmen",
    },
  ];

  const rankingTopSolvers = [
    {
      id: 1,
      name: "Juan",
    },
    {
      id: 2,
      name: "Pedro",
    },
    {
      id: 3,
      name: "Maria",
    },
  ];

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <RankingCard
          title="Ranking"
          subtitle="Más quedus compartidos"
          first={rankingTopContributors[0].name}
          second={rankingTopContributors[1].name}
          third={rankingTopContributors[2].name}
        />
        <RankingCard
          title="Ranking"
          subtitle="Más quedus resueltos con 100% de acierto"
          first={rankingTopSolvers[0].name}
          second={rankingTopSolvers[1].name}
          third={rankingTopSolvers[2].name}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 32,
    alignItems: "center", // Alinea el contenido en el centro horizontal
    gap: 24,// Alinea el contenido en el centro horizontal
  },
});

export default RankingScreen;
