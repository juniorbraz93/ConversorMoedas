import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

// import { Container } from './styles';

import Colors from '../../config/Colors';

const Picker = (props: any) => {
  const placeHolder = {
    label: 'Selecione uma modea...',
    value: null,
    color: Colors.black,
  };

  return (
    <RNPickerSelect
      placeholder={placeHolder}
      items={props.moedas}
      onValueChange={valor => props.onChange(valor)}
      style={{
        inputIOS: {
          fontSize: 20,
          color: Colors.black,
        },
        inputAndroid: {
          fontSize: 20,
          color: Colors.black,
        },
      }}
    />
  );
};

export default Picker;
