import React from 'react';
import { CustomView } from './view/CustomView';
import { ButtonsFlatList } from './button/ButtonList';
import { IButtonItem } from '../interfaces/IButtonItem';
import { CustomTextInput } from './input/TextInput';
import { WrapperView } from './view/Wrapper';

const buttons: IButtonItem[] = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '+' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '-' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '*' },
  { text: 'C' },
  { text: '0' },
  { text: '=' },
  { text: '/' },
];

export function Calculator() {
  return (
    <CustomView>
      <WrapperView>
        <CustomTextInput />
        <ButtonsFlatList buttons={buttons} />
      </WrapperView>
    </CustomView>
  );
}
