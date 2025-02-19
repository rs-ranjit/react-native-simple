import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 20,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 100,
  },
  container: {
    backgroundColor: 'white',
    margin: 13,
    padding: 13,
  },
  containerBox: {
    flexDirection: 'row',
  },
  textRight: {
    paddingLeft: 20,
    fontSize: 14,
    paddingBottom: 7,
  },
  textLeft: {
    paddingLeft: 10,
    paddingBottom: 7,
    color: 'grey',
    fontSize: 14,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 16,
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    width: 120,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#f5f5f5',
    elevation: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
