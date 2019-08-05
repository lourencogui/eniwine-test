import { StyleSheet } from 'react-native';
// import { general } from '/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94025e',
    // ...general.container,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 25,
  },

  emailInput: {
    // ...general.textInput,
    marginVertical: 5,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  passwordContainer: {
    // ...general.container,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  passwordInput: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    flexGrow: 1,
    height: 45,
    marginVertical: 5,
    paddingHorizontal: 10,
    // ...general.textInput,
  },

  loginButton: {
    backgroundColor: '#ba0075',
    height: 45,
    color: '#FFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },

  loginTextButton: {
    color: '#FFF',
    elevation: 2,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
