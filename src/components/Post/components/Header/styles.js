import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    color: '#3c3c3c',
    alignSelf: 'center',
  },
});

export default styles;
