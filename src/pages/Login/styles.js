import { StyleSheet } from 'react-native';
import { general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    backgroundColor: '#94025e',
    // ...general.container,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 25,
  },

  emailInput: {
    ...general.textInput,
    backgroundColor: '#FFF',
  },

  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  passwordInput: {
    ...general.textInput,
    backgroundColor: '#FFF',
    flexGrow: 1,
  },

  errorText: {
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 5,
  },

  loginButton: {
    ...general.button,
  },

  loginTextButton: {
    ...general.textButton,
  },

  textButton: {
    ...general.button,
    backgroundColor: 'transparent',
  },

  textButtonLink: {
    ...general.textButton,
    textDecorationLine: 'underline',
  },

  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
