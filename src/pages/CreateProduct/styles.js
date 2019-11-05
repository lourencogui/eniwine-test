import { StyleSheet } from 'react-native';
import { general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94025e',
    padding: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  img: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  icon: {
    alignSelf: 'center',
  },
  input: {
    ...general.textInput,
    color: '#FFF',
    backgroundColor: '#8b0158',
  },
  button: {
    ...general.button,
  },
  textButton: {
    ...general.textButton,
  },
  picker: {
    color: '#FFF',
  },
});

export default styles;
