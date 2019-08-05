import { StyleSheet } from 'react-native';
import { general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    backgroundColor: '#94025e',
    padding: 10,
  },
  finishButton: {
    ...general.button,
  },

  finishTextButton: {
    ...general.textButton,
  },
});

export default styles;
