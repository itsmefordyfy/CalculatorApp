import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface IButtonNumberProps {
  text?: string;
  buttonStyles?: any;
  textStyles?: any;
  onPress?: any;
}

const ButtonNumber: React.FC<IButtonNumberProps> = ({
  text,
  buttonStyles,
  textStyles,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNumber;
