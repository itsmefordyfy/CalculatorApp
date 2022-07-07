import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import CalculatorControls from '../../components/CalculatorControls';
import {removeTrailZeros} from '../../helpers/removeTrailZeros';
import {convertToRoman} from '../../helpers/convertToRoman';
import {GlobalContext} from '../../context/GlobalContext';
import strings from '../../res/strings';
import styles from './styles';

const Home: React.FC = () => {
  const {
    result,
    setResult,
    operator,
    setOperator,
    firstParameter,
    setFirstParameter,
    secondParameter,
    setSecondParameter,
    isRomanNumeral,
    setRomanNumeral,
  } = useContext(GlobalContext);

  const handleCalculateOperation = () => {
    switch (operator) {
      case strings.PLUS_SIGN:
        setResult(parseFloat(firstParameter) + parseFloat(secondParameter));
        break;
      case strings.SUBTRACT_SIGN:
        setResult(parseFloat(firstParameter) - parseFloat(secondParameter));
        break;
      case strings.DIVIDE_SIGN:
        setResult(parseFloat(firstParameter) / parseFloat(secondParameter));
        break;
      case strings.MULTIPLY_SIGN:
        setResult(parseFloat(firstParameter) * parseFloat(secondParameter));
        break;
      default:
        setResult(strings.ERROR);
    }

    setOperator('');
    setFirstParameter('0');
    setSecondParameter('0');
  };

  const handlePercent = () => {
    let number = parseFloat(result);
    const percentResult = (number /= Math.pow(100, 1));
    setResult(percentResult);
  };

  const handleSetParameters = (newValue: string) => {
    if (operator && firstParameter) {
      const newSecondParameter = removeTrailZeros(secondParameter, newValue);
      setSecondParameter(newSecondParameter);
      setResult(newSecondParameter);
    } else {
      const newFirstParameter = removeTrailZeros(firstParameter, newValue);
      setFirstParameter(newFirstParameter);
      setResult(newFirstParameter);
    }
  };

  const handleResetParameters = () => {
    setOperator('');
    setFirstParameter('0');
    setSecondParameter('0');
    setResult('0');
  };

  const handleSwitchToRomanNumeral = () => {
    setRomanNumeral(!isRomanNumeral);
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultNumber}>
          {isRomanNumeral ? convertToRoman(result) : result}
        </Text>
      </View>

      <CalculatorControls
        onPressReset={handleResetParameters}
        onPressNumber={handleSetParameters}
        onPressEqual={handleCalculateOperation}
        onPressPercent={handlePercent}
        onPressSwitchRomanNumeral={handleSwitchToRomanNumeral}
      />
    </View>
  );
};

export default Home;
