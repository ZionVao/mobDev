import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Picker } from 'react-native';
import { StyledText } from './text/StyledText';

interface FieldProps {
  onSelect: (value: string) => void | Promise<void>;
}

export const Field = ({ onSelect }: FieldProps) => {
  const [value, setValue] = useState<string>();

  const options = ['-', 'X', 'O'];

  return (
    <FieldView>
      {value ? (
        <StyledText>{value}</StyledText>
      ) : (
        <Picker
          mode="dropdown"
          selectedValue={null}
          onValueChange={(itemValue) => {
            setValue(itemValue);
            onSelect(itemValue);
          }}
        >
          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      )}
    </FieldView>
  );
};

const FieldView = styled.View`
  width: 85px;
  height: 85px;
  background: lightcoral;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: beige;
  display: flex;
`;
