import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../../components/AppBar";
import colors from "../../src/colors";
import { SectionHeader } from "../../components/cards/section/SectionHeader";
import { SectionCommunity } from "../../components/cards/section/community/SectionCommunity";
import CommunityServices from "../../src/api/CommunityServices";

const userId = "67390a53943c2957c92a7b8b"; // ----------------------------- aqui reemplazaré el id del usuario

const CommunitiesScreen = ({ navigation }) => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await CommunityServices.getAllCommunities();
        setCommunities(response.community);
      } catch (error) {
        console.error("Error al obtener las comunidades:", error);
      }
    };

    fetchCommunities();
  }, []);

  const handleCommunityPress = (communityId) => {
    console.log(communities);
    navigation.navigate("CommunityDetail", { communityId });
  };

  const handleAddCommunityPress = () => {
    // Aquí navegamos a la pantalla de creación de comunidad
    navigation.navigate("CreateComunityScreen");
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.title}>
        {/* Pasamos la función handleAddCommunityPress al icono "add" */}
        <SectionHeader
          name="Mis comunidades"
          color={colors.darkBlue}
          icon2="add"
          onIcon2Press={handleAddCommunityPress}
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
    paddingHorizontal: 20,
  },
});

export default CommunitiesScreen;
