import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  badge: {
    position: 'absolute',
    zIndex: 10,
    left: 10,
    bottom: 17,
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ba0075',
    fontWeight: 'bold',
  },
});

export default styles;
