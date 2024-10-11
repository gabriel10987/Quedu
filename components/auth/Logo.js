import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../../src/colors'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/LogoMain.png')} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.textQ}>Q</Text>
        <Text style={styles.text}>uedu</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  textQ: {
    fontSize: 48,
    fontFamily: 'Quicksand-SemiBold',
    color: colors.lightBlue,
  },
  text: {
    fontSize: 48,
    fontFamily: 'Quicksand-SemiBold',
    color: colors.darkBlue,
  },
  image: {
    width: 89,
    height: 72,
  },
})

export default Logo
