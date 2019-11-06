import React, { Component } from 'react';
import {
  View, FlatList, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as WineActions } from '~/store/ducks/wine';
import WineItem from './components/WineItem';
import styles from './styles';

class Cart extends Component {
  static navigationOptions = () => ({
    title: 'Carrinho',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#FFF',
    },
    headerStyle: {
      backgroundColor: '#ba0075',
      height: 80,
    },
    headerTintColor: '#fff',
  });

  static propTypes = {
    WineActions: PropTypes.shape().isRequired,
    wine: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    cartCount: PropTypes.number.isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  onAddWine = (item) => {
    this.props.WineActions.addWine(item);
  };

  onRemoveWine = (item) => {
    this.props.WineActions.removeWine(item);
  };

  checkout = () => {
    this.props.WineActions.checkoutOrder();
  };

  renderAppropriateComponent = () => {
    if (this.props.loading) {
      return (
        <TouchableOpacity style={styles.finishButton} disabled>
          <ActivityIndicator size="small" color="#FFF" />
        </TouchableOpacity>
      );
    }
    if (this.props.cartCount > 0) {
      return (
        <TouchableOpacity style={styles.finishButton} onPress={this.checkout}>
          <Text style={styles.finishTextButton}>Finalizar compra</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.wine.cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <WineItem wine={item} onAdd={this.onAddWine} onRemove={this.onRemoveWine} />
          )}
        />
        {this.renderAppropriateComponent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  wine: state.wine,
  cart: state.wine.cart,
  cartCount: state.wine.cart.length,
  loading: state.wine.loading,
});

const mapDispatchToProps = dispatch => ({
  WineActions: bindActionCreators(WineActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
