import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  resultNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-end',
    padding: 20,
  },
  controlContainer: {
    backgroundColor: '#e3e1e1',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    padding: 20,
  },
  resultContainer: {
    height: 350,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#d4d4d4',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
  },
  buttonNumber: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000000',
  },
  buttonNumeralNumber: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginTop: 5,
  },
  romanNumeralSwitcher: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 18,
    color: '#06abba',
  },
  romanNumeralButtonContainer: {
    backgroundColor: '#d4d4d4',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
  },
  operator: {
    fontSize: 25,
    fontWeight: '600',
    color: '#f56e64',
  },
  topOperator: {
    fontSize: 20,
    fontWeight: '600',
    color: '#06abba',
    marginTop: 3,
  },
  zero: {
    width: '38%',
  },
});
