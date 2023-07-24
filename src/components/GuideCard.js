import {
  StyleSheet,
  Pressable,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import React from 'react';

import { colors } from '../utils/theme/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

//components
import BodyText from './Typography/BodyText';

export default function GuideCard({
  enableprofile = true,
  message1 = '',
  message2 = '',
  linksenable = true,
}) {
  return (
    <View style={styles.mncontainer}>
      <View style={styles.child}>
        <View style={styles.left}>
          <ImageBackground
            resizeMode="contain"
            style={styles.profile}
            source={require('../assets/images/userbot.png')}>
            <Ionicons
              name="chatbox"
              size={24}
              color={colors.darkOrange}
              style={styles.icon}
            />
          </ImageBackground>
          <BodyText
            type="sm"
            textstyle={styles.foundertext}
            text={`Gwion,\nFounder`}
          />
        </View>
        <View style={styles.right}>
          <BodyText
            textstyle={styles.gbtextcolor}
            type={'rg'}
            text={message1}
          />
          <View style={styles.detail}>
            {message2 && (
              <BodyText
                textstyle={styles.gbtextcolor}
                type={'rg'}
                text={message2}
              />
            )}
            {linksenable && (
              <View style={styles.links}>
                {[
                  'Gwion@boxd-app.com',
                  'Elen@boxd-app.com',
                  'we love to hear your feedback',
                ].map((item, i) => (
                  <BodyText
                    type="rg"
                    textstyle={styles.link}
                    text={item}
                    key={i}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    backgroundColor: colors.lightOrange,
    width: '95%',
    borderWidth: 0.5,
    borderColor: colors.darkOrange,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginVertical: 10,
  },
  child: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {},
  right: {
    marginLeft: 15,
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'relative',
    marginBottom: 5,
  },
  foundertext: {
    textAlign: 'center',
    color: colors.darkGray,
  },
  gbtextcolor: {
    color: colors.black,
    fontWeight: 500,
    marginTop: 5,
  },
  detail: {
    marginTop: 20,
  },
  links: {
    marginVertical: 10,
  },
  link: {
    marginBottom: 5,
    color: colors.darkOrange,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    right: -5,
  },
});
