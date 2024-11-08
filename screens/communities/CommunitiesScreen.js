import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../../components/AppBar";
import colors from "../../src/colors";
import { SectionHeader } from "../../components/cards/section/SectionHeader";
import { SectionCommunity } from "../../components/cards/section/community/SectionCommunity";

const CommunitiesScreen = ({ navigation }) => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const communitiesData = [
      {
        name: "Programación Orientada a objetos",
        tests: "48",
        image: "../../../../assets/images/img.png",
      },
      {
        name: "Ingeniería de Requerimientos",
        tests: "12",
        image: "../../../../assets/images/img.png",
      },
      {
        name: "Mejora continua",
        tests: "92",
        image: "../../../../assets/images/img.png",
      },
      {
        name: "Sistemas Operativos",
        tests: "1",
        image: "../../../../assets/images/img.png",
      },
      {
        name: "Base de Datos Avanzado",
        tests: "1",
        image: "../../../../assets/images/img.png",
      },
      {
        name: "Desarrollo de Aplicaciones Web",
        tests: "26",
        image: "../../../../assets/images/img.png",
      },
    ];
    setCommunities(communitiesData);
  }, []);

  const handleCommunityPress = (community) => {
    navigation.navigate("CommunityDetail", { community });
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.title}>
        <SectionHeader
          name="Mis comunidades"
          color={colors.darkBlue}
          icon2="add"
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionCommunity
          data={communities}
          onItemPress={handleCommunityPress}
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
    paddingHorizontal: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: colors.darkBlue,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    paddingHorizontal: 20
   }
});

export default CommunitiesScreen;
