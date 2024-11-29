import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppBar from "../../components/AppBar";
import { Section } from "../../components/cards/section/Section";
import colors from "../../src/colors";
import { ScrollView } from "react-native-gesture-handler";
import CommunityServices from "../../src/api/CommunityServices";

const CommunityDetailScreen = ({ route, navigation }) => {
  const { communityId } = route.params;
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [community, setCommunity] = useState({});
  console.log(`community id: ${communityId}`);

  useEffect(() => {
    const fetchSharedQuedus = async () => {
      try {
        const response = await CommunityServices.getCommunityById(communityId);
        setCommunity(response);
        console.log(
          `---------------------------------${JSON.stringify(response)}`
        );
        console.log(
          `---------------------------------${JSON.stringify(response.sharedQuedus)}`
        );
      } catch (error) {
        console.error("Error al obtener los quedus compartidos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSharedQuedus();
  }, []);

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      {loading ? (
        // Indicador de carga
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          {community.community ? (
            <Section
              name={community.community.name}
              color={colors.lightBlue}
              icon1="bookmark"
              icon2="arrow-up"
              data={community.sharedQuedus}
              section='Quedus'
            />
          ) : (
            <View>
              <Text>No se encontraron datos.</Text>
            </View>
          )}
        </ScrollView>
      )}
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

export default CommunityDetailScreen;
