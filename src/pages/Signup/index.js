import React, { Component } from 'react';
import {
  View, TextInput, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';
import styles from './styles';

class Signup extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  state = {
    email: '',
    username: '',
    password: '',
  };

  signup = () => {
    this.props.LoginActions.callSignupRequest({
      ...this.state,
      navigation: { ...this.props.navigation },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Informe seu e-mail"
          value={this.state.email}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Informe seu nome de usuário"
          value={this.state.username}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="text"
          onChangeText={username => this.setState({ username })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          placeholder="Informe sua senha"
          returnKeyType="go"
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            this.signup();
          }}
        >
          {this.props.login.loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.signupTextButton}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(LoginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
