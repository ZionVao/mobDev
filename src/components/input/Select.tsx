import React, { useState } from 'react';
import { Picker } from 'react-native';
import styled from 'styled-components/native';

interface SelectParams {
  values: string[];
  handleChange: (value: string) => void | Promise<void>;
}

export const Select = ({ values, handleChange }: SelectParams) => {
  const [currentValue, setCurrentValue] = useState('');

  return (
    <PickerView>
      <Picker
        selectedValue={currentValue}
        onValueChange={(value) => {
          setCurrentValue(value);
          handleChange(value);
        }}
      >
        {values.map((value) => {
          return <Picker.Item label={value} value={value} key={value} />;
        })}
      </Picker>
    </PickerView>
  );
};

const PickerView = styled.View`
  background: yellow;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  padding: 0 5px;
`;
