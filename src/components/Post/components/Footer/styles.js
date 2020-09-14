import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  iconscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    padding: 5,
  },

  iconsLeft: {
    flexDirection: 'row',
    width: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    margin: 3,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});
export default styles;
