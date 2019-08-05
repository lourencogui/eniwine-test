import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Creators as WineActions } from '~/store/ducks/wine';
import styles from './styles';

class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.count ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{this.props.count}</Text>
          </View>
        ) : null}
        <TouchableOpacity
          onPress={() => this.props.onPress()}
          hitSlop={{
            top: 5,
            left: 5,
            bottom: 5,
            right: 5,
          }}
        >
          <Icon name="cart-outline" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.wine.quantityOnCart,
});

const mapDispatchToProps = dispatch => ({
  WineActions: bindActionCreators(WineActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
