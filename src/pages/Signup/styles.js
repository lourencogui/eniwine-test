import { StyleSheet } from 'react-native';
import { general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    backgroundColor: '#94025e',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 25,
  },

  textInput: {
    ...general.textInput,
    backgroundColor: '#FFF',
  },

  errorText: {
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 5,
  },

  signupButton: {
    ...general.button,
  },

  signupTextButton: {
    ...general.textButton,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
