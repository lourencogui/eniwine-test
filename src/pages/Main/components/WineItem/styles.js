import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    // padding: 5,
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
  },
  controls: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ba0075',
    // backgroundColor: '#b50072',
  },
  buttonText: {
    color: '#FFF',
  },
});

export default styles;
