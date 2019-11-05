import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const WineItem = ({ wine, onPress }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: wine.avatar ? wine.avatar : 'https://cdn.shopify.com/s/files/1/0588/4573/products/S5.jpg?v=1557447573',
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>{wine.name}</Text>
      </View>
    </View>
    <View style={styles.controls}>
      <TouchableOpacity
        onPress={() => onPress(wine)}
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10,
        }}
      >
        <Text style={styles.buttonText}>Adicionar item</Text>
      </TouchableOpacity>
    </View>
  </View>
);
WineItem.propTypes = {
  wine: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number,
  }),
  onPress: PropTypes.func.isRequired,
};

WineItem.defaultProps = {
  wine: {
    id: 1,
    name: 'Vinho Tinto',
    description: 'Não definido',
    type: 'Não definido',
    size: '350ml',
    price: 0,
  },
};
export default WineItem;
