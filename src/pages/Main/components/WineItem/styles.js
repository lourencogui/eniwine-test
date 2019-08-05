import { StyleSheet } from 'react-native';
import { general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    borderRadius: 4,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  content: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  avatar: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    height: 110,
    width: 50,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    color: '#ba0075',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controls: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ba0075',
  },
  buttonText: {
    ...general.textButton,
  },
});

export default styles;
