import React, {useContext} from 'react';
import styles from './styles';
import {View} from 'react-native';
import ButtonNumber from '../ButtonNumber';
import {GlobalContext} from '../../context/GlobalContext';
import strings from '../../res/strings';

interface ICalculatorControlsProps {
  onPressNumber?: any;
  onPressReset?: any;
  onPressEqual?: any;
  onPressPercent?: any;
  onPressSwitchRomanNumeral?: any;
}

const CalculatorControls: React.FC<ICalculatorControlsProps> = ({
  onPressNumber,
  onPressReset,
  onPressEqual,
  onPressPercent,
  onPressSwitchRomanNumeral,
}) => {
  const {setOperator, isRomanNumeral, result} = useContext(GlobalContext);

  return (
    <View style={styles.controlContainer}>
      <View style={styles.buttonRow}>
        <ButtonNumber
          text={result === '0' ? strings.AC : strings.C}
          buttonStyles={styles.buttonContainer}
          textStyles={styles.topOperator}
          onPress={() => onPressReset()}
        />
        <ButtonNumber
          text={strings.SWITCH}
          buttonStyles={styles.romanNumeralButtonContainer}
          textStyles={styles.romanNumeralSwitcher}
          onPress={() => onPressSwitchRomanNumeral()}
        />

        {!isRomanNumeral && (
          <>
            <ButtonNumber
              text="%"
              buttonStyles={styles.buttonContainer}
              textStyles={styles.topOperator}
              onPress={() => onPressPercent()}
            />
          </>
        )}

        <ButtonNumber
          text="÷"
          buttonStyles={styles.buttonContainer}
          textStyles={styles.operator}
          onPress={() => setOperator('÷')}
        />
      </View>

      <View style={styles.buttonRow}>
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_SEVEN : strings.SEVEN}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.SEVEN)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_EIGHT : strings.EIGHT}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.EIGHT)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_NINE : strings.NINE}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.NINE)}
        />
        <ButtonNumber
          text="x"
          buttonStyles={styles.buttonContainer}
          textStyles={styles.operator}
          onPress={() => setOperator('x')}
        />
      </View>

      <View style={styles.buttonRow}>
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_FOUR : strings.FOUR}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.FOUR)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_FIVE : strings.FIVE}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.FIVE)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_SIX : strings.SIX}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.SIX)}
        />
        <ButtonNumber
          text="-"
          buttonStyles={styles.buttonContainer}
          textStyles={styles.operator}
          onPress={() => setOperator('-')}
        />
      </View>

      <View style={styles.buttonRow}>
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_ONE : strings.ONE}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.ONE)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_TWO : strings.TWO}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.TWO)}
        />
        <ButtonNumber
          text={isRomanNumeral ? strings.ROMAN_THREE : strings.THREE}
          buttonStyles={styles.buttonContainer}
          textStyles={
            isRomanNumeral ? styles.buttonNumeralNumber : styles.buttonNumber
          }
          onPress={() => onPressNumber(strings.THREE)}
        />
        <ButtonNumber
          text="+"
          buttonStyles={styles.buttonContainer}
          textStyles={styles.operator}
          onPress={() => setOperator('+')}
        />
      </View>

      <View style={styles.buttonRow}>
        {!isRomanNumeral && (
          <ButtonNumber
            text="0"
            buttonStyles={styles.buttonContainer}
            textStyles={styles.buttonNumber}
            onPress={() => onPressNumber('0')}
          />
        )}

        <ButtonNumber
          text="."
          buttonStyles={styles.buttonContainer}
          textStyles={styles.buttonNumber}
          onPress={() => onPressNumber('.')}
        />
        <ButtonNumber
          text="="
          buttonStyles={styles.buttonContainer}
          textStyles={styles.buttonNumber}
          onPress={() => onPressEqual()}
        />
      </View>
    </View>
  );
};

export default CalculatorControls;
