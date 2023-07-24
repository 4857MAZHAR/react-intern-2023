import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

//components
import TodoCard from '../../components/TodoCard';
import GuideCard from '../../components/GuideCard';
import BodyText from '../../components/Typography/BodyText';
import Heading from '../../components/Typography/Heading';
import Header from '../../components/Header';
import {colors} from '../../utils/theme/colors/colors';

import LogoIcon from '../../assets/icons/LogoIcon';
import BellIcon from '../../assets/icons/BellIcon';

export default function DashBoardScreen() {
  const {todo} = useSelector(state => state.todos);
  const userName = '28&Moon';
  const notificationCount = 3;
  return (
    <SafeAreaView style={{flex:1}}>
      <Header
        title={`Hello ${userName}`}
        rightComponent={
          <View style={styles.rightContainer}>
            {/* Logo */}
            <LogoIcon height={55} width={60} />
            {/* Right */}
            <View style={styles.box}>
              <BellIcon width={17} height={17} color={colors.white} />
              <View style={styles.countContainer}>
                <Text style={styles.countText}>{notificationCount}</Text>
              </View>
            </View>
          </View>
        }
      />
      <View style={styles.mncontainer}>
        <Heading
          textstyle={styles.welcometext}
          type="h1"
          text={'Welcome to your \nBOXD 2 week trial'}
        />
        <GuideCard
          message1={"it's nice to have u with us!"}
          message2={
            'Reach out to us directly for support,\nany questions or feedback.'
          }
        />
        <View style={styles.sheet}>
          <View style={styles.horizontalflex}>
            <Heading
              type="h4"
              textstyle={styles.headtextstyle1}
              text={'To do'}
            />
            <BodyText
              type="rg"
              textstyle={styles.numtodotextstyle}
              text={`${todo?.length} of 5`}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlisttodo}
            data={todo}
            renderItem={({item}) => <TodoCard item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sheet: {
    height: 500,
    width: '100%',
    backgroundColor: colors.lightgrey1,
    marginTop: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  headtextstyle1: {
    color: colors.textcolor,
  },
  numtodotextstyle: {
    color: colors.textcolor,
  },
  welcometext: {
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 13,
    color: colors.greendark1,
  },

  horizontalflex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  centerflex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlisttodo: {
    paddingBottom: 30,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    height: 35,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orangePrimary,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    marginLeft: 4,
  },
  countContainer: {
    width: 18,
    height: 18,
    backgroundColor: colors.green,
    borderRadius: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: colors.white,
    fontSize: 11,
  },
});
