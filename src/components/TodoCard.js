import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {colors} from '../utils/theme/colors/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

//components
import Heading from './Typography/Heading';
import BodyText from './Typography/BodyText';
import {completetodo} from '../store/todo/todoSlice';
import {SvgXml} from 'react-native-svg';
export default function TodoCard({item}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View style={styles.cardleft}>
        <SvgXml width={26} height={26} xml={item?.icon} />
      </View>
      <View style={styles.cardright}>
        <Heading textstyle={styles.headtext} type="h4" text={item?.todo} />
        <BodyText type="rg" text={item?.desc} />
      </View>
      <TouchableOpacity
        onPress={() => dispatch(completetodo(item?.id))}
        style={styles.crossbtn}>
        <EvilIcons name="close" size={22} color={colors.darkGray} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.darkGray,
    display: 'flex',
    flexDirection: 'row',
  },
  horizontalflex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  centerflex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtext: {
    color: colors.black,
    textAlign: 'left',
    fontWeight: '500',
  },
  cardright: {},
  cardleft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
  crossbtn: {
    position: 'absolute',
    right: 8,
    top: 7,
  },
});
