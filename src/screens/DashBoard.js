import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

//components
import TodoCard from '../components/TodoCard';
import GuideCard from '../components/GuideCard';
import BodyText from '../components/Typography/BodyText';
import Heading from '../components/Typography/Heading';

import { colors } from '../utils/theme/colors/colors';

export default function DashBoard() {
  const { todo } = useSelector(state => state.todos);
  return (
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
          <Heading type="h4" textstyle={styles.headtextstyle1} text={'To do'} />
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
          renderItem={({ item }) => <TodoCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
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
    backgroundColor: colors.lightGray1,
    marginTop: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  headtextstyle1: {
    color: colors.textColor,
  },
  numtodotextstyle: {
    color: colors.textColor,
  },
  welcometext: {
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 13,
    color: colors.greenDark1,
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
});
