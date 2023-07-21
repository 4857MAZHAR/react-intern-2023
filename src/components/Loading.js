import React from 'react';
import {Modal, View, ActivityIndicator, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

import {colors} from '../utils/theme/colors/colors';

function Loading({show}) {
  return (
    <Modal
      visible={show}
      transparent={true}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginTop: windowHeight / 2 - 50,
          width: '100%',
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            elevation: 5,
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={25} color={colors.black} />
        </View>
      </View>
    </Modal>
  );
}

export default Loading;
