import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductCard from '../components/ProductCard';
import {fetchProducts} from '../store/productslice';
import Loading from '../components/Loading';

export default function HomeScreen({navigation, route}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View style={styles.mncontainer}>
      <Loading show={products?.isloading} />
      <FlatList
        numColumns={3}
        data={products?.products}
        renderItem={({item}) => <ProductCard key={item?.id} data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    flex: 1,
  },
});
