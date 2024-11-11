import React, {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from "../../components/AppBar";
import { Section } from "../../components/cards/section/Section";
import colors from "../../src/colors";
import { ScrollView } from "react-native-gesture-handler";
import CommunityServices from "../../src/api/CommunityServices";


const CommunityDetailScreen = ({route, navigation}) => {
    const { communityId } = route.params;
    const [sharedQuedus, setSharedQuedus] = useState([]);
    console.log(`community id: ${communityId}`);

    useEffect(() => {
        const fetchSharedQuedus = async () => {
            try {
                const response = await CommunityServices.getCommunityById(communityId);
                setSharedQuedus(response);
                console.log(response);
            } catch (error) {
                console.error("Error al obtener los quedus compartidos:", error);
            }
        };
        fetchSharedQuedus();
    }, []);

    
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Section
          name={'Quedus compartidos'}
          color={colors.lightBlue}
          icon1="bookmark"
          icon2="arrow-up"
          data={sharedQuedus.sharedQuedus}
        />
      </ScrollView>
    </View>
  )
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

export default CommunityDetailScreen
