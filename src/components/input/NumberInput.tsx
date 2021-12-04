import React from 'react';
import { DefaultTextInput } from './DefaultTextInput';

interface ComponentProps {
  onChange: (value: string) => any;
  value: string;
}

export const NumberInput = ({ onChange, value }: ComponentProps) => {
  const handleInput = (text: string) => {
    onChange(
      (text?.split('') || []).reduce((acc, char, index) => {
        if (parseInt(char, 10)) {
          return acc + char;
        }

        if (char === '-' && index === 0) {
          return acc + char;
        }

        if (char === '.' && index !== 0) {
          return acc + char;
        }

        return acc;
      }, ''),
    );
  };

  return (
    <DefaultTextInput
      onChangeText={handleInput}
      value={value}
      keyboardType="numeric"
    />
  );
};
