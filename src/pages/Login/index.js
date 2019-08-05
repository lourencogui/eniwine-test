import React, { Component } from 'react';
import {
  View, TextInput, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Creators as LoginActions } from '~/store/ducks/login';
import styles from './styles';

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  state = {
    email: '',
    password: '',
    showPassword: true,
  };

  componentWillMount() {
    this.props.LoginActions.clear();
  }

  login = () => {
    this.props.LoginActions.callAuthRequest(this.state);
    this.props.navigation.navigate({ routeName: 'Main' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.emailInput}
          placeholder="Informe seu e-mail"
          value={this.state.email}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            placeholder="Informe sua senha"
            returnKeyType="go"
            secureTextEntry={this.state.showPassword}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.setState({ showPassword: !this.state.showPassword })}
          >
            <Icon name="eye-outline" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.login();
          }}
        >
          {this.props.login.loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.loginTextButton}>Entrar</Text>
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
)(Login);
