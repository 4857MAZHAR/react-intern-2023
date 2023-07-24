import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

//import color them
import { colors } from '../utils/theme/colors/colors';

//import

//import components
import Heading from '../components/Typography/Heading';
import BodyText from '../components/Typography/BodyText';
import DynamicButton from '../components/DynamicButton';

//import screen names
import { screennames } from '../utils/screennames';

const NewFeatureScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Heading text='New For You' textstyle={styles.text} type='h4' />
      <View style={styles.featureContainer}>
        <Heading text='Say Hello to your business activity something' type='h3' textstyle={styles.featText} />

        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/images/feature.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>


        <BodyText text='TBS line about what this is' textstyle={styles.bodyText} />
        <BodyText text='TBS line about what this is' textstyle={styles.bodyText} />

      </View>
      <View style={styles.btnContainer}>

        <DynamicButton text='Continue to Dashboard'
          btnfunction={() => navigation.navigate('home', { screen: 'HomeScreen', })}
          textstyle={styles.btntext1}
          btnstyle={{ ...styles.center, ...styles.btnstyle1 }}
        />
      </View>
    </View>
  );
};

export default NewFeatureScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  text: {
    marginTop: 30,
    color: colors.greenDark1,
  },
  featureContainer: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderLeftWidth: 5,
    borderLeftColor: colors.darkOrange,
    backgroundColor: colors.greenDark1
  },
  featText: {
    color: colors.white,
    textAlign: "left",
  },
  bodyText: {
    color: colors.white,
  },
  btnContainer: {
    paddingHorizontal: 50,
    paddingTop: 10,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnstyle1: {
    backgroundColor: colors.orange,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: colors.darkOrange,
  },
  btntext1: {
    color: colors.black,
  },
  image: {
    width: 400,
    height: 400
  },
  imgContainer: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',

  }

})



