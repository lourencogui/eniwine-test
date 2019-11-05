import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const WineItem = ({ wine, onAdd, onRemove }) => (
  <View style={styles.container}>
    <View style={styles.avatar}>
      <Image
        style={styles.avatarImage}
        resizeMode="cover"
        source={{
          uri: wine.avatar ? wine.avatar : 'https://cdn.shopify.com/s/files/1/0588/4573/products/S5.jpg?v=1557447573',
        }}
      />
    </View>
    <View style={styles.details}>
      <Text style={styles.name}>{wine.name}</Text>
      <View style={styles.detailsItem}>
        {
          wine.description
            ? <Text style={styles.type}>{`${wine.description} - `}</Text>
            : <Text style={styles.type}>Sem descrição - </Text>
        }
        <Text style={styles.size}>{`${wine.size}ml`}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.totalPrice}>R$</Text>
        <Text style={styles.totalPrice}>{wine.price * wine.quantity}</Text>
      </View>
    </View>
    <View style={styles.controls}>
      <TouchableOpacity
        onPress={() => onAdd(wine)}
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10,
        }}
      >
        <Icon name="plus" color="#FFF" size={20} />
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{wine.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onRemove(wine)}
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10,
        }}
      >
        <Icon name="minus" color="#FFF" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);
WineItem.propTypes = {
  wine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};


export default WineItem;
