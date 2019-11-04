import React, { Component, Fragment } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { store } from '~/store';
import { Creators as WineActions } from '~/store/ducks/wine';
import WineItem from './components/WineItem';
// import BottomComponent from '~/components/BottomComponent';
import HeaderComponent from '~/components/HeaderComponent';
import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Produtos',
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
    headerLeft: null,
    headerRight: <HeaderComponent onPress={() => navigation.navigate({ routeName: 'Cart' })} />,
  });

  static propTypes = {
    WineActions: PropTypes.shape().isRequired,
    wine: PropTypes.shape().isRequired,
  };


  componentDidMount() {
    this.props.WineActions.clear();
    this.props.WineActions.getWines();
  }

  addItem = (item) => {
    console.tron.log(item);
    this.props.WineActions.addWine(item);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.wine.loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <FlatList
              data={this.props.wine.wines}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <WineItem wine={item} onPress={this.addItem} />}
              numColumns={2}
            />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  wine: state.wine,
});

const mapDispatchToProps = dispatch => ({
  WineActions: bindActionCreators(WineActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
