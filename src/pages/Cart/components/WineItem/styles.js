import { StyleSheet } from 'react-native';
import { general } from '~/styles';


const styles = StyleSheet.create({
  container: {
    ...general.container,
    borderRadius: 4,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 4,
    elevation: 1,
  },
  avatarImage: {
    height: 80,
    width: 80,
  },
  details: {
    margin: 5,
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 12,
    color: '#272727',
  },
  detailsItem: {
    flexDirection: 'row',
  },
  type: {
    fontSize: 16,
    color: '#272727',
  },
  size: {
    fontSize: 16,
    color: '#272727',
  },
  price: {
    flexDirection: 'row',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#ba0075',
  },
  controls: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ba0075',
  },
  quantity: {
    alignItems: 'center',
  },
  quantityText: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default styles;
