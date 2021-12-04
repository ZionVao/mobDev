import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { CustomView } from './view/CustomView';
import { ButtonsList } from './button/ButtonList';
import { IButtonItem } from '../interfaces/IButtonItem';
import { CustomTextInput } from './input/TextInput';
import { WrapperView } from './view/Wrapper';

export function Calculator() {
  const [expression, setExpression] = useState<string>('');

  const buttons: IButtonItem[] = [
    {
      text: '1',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '2',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '3',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '+',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '4',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '5',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '6',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '-',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '7',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '8',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '9',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '*',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: 'C',
      handler: () => {
        setExpression('');
      },
    },
    {
      text: '0',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
    {
      text: '=',
      handler: () => {
        setExpression(evaluate(expression).toString());
      },
    },
    {
      text: '/',
      handler: (value) => {
        setExpression(`${expression}${value}`);
      },
    },
  ];
  return (
    <CustomView>
      <WrapperView>
        <CustomTextInput value={expression} editable={false} />
        <ButtonsList buttons={buttons} />
      </WrapperView>
    </CustomView>
  );
}
