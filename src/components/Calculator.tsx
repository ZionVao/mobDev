import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { CustomView } from './view/CustomView';
import { ButtonsList } from './button/ButtonList';
import { IButtonItem } from '../interfaces/IButtonItem';
import { CustomTextInput } from './input/TextInput';
import { WrapperView } from './view/Wrapper';

export function Calculator() {
  const [expression, setExpression] = useState<string>('');

  const numberHandler = (value: string) => {
    setExpression(`${expression}${value}`);
  };

  const signHandler = (value: string) => {
    setExpression(`${expression} ${value} `);
  };

  const buttons: IButtonItem[] = [
    {
      text: '1',
      handler: numberHandler,
    },
    {
      text: '2',
      handler: numberHandler,
    },
    {
      text: '3',
      handler: numberHandler,
    },
    {
      text: '+',
      handler: signHandler,
    },
    {
      text: '4',
      handler: numberHandler,
    },
    {
      text: '5',
      handler: numberHandler,
    },
    {
      text: '6',
      handler: numberHandler,
    },
    {
      text: '-',
      handler: signHandler,
    },
    {
      text: '7',
      handler: numberHandler,
    },
    {
      text: '8',
      handler: numberHandler,
    },
    {
      text: '9',
      handler: numberHandler,
    },
    {
      text: '*',
      handler: signHandler,
    },
    {
      text: 'C',
      handler: () => {
        setExpression('');
      },
    },
    {
      text: '0',
      handler: numberHandler,
    },
    {
      text: '=',
      handler: () => {
        setExpression(evaluate(expression).toString());
      },
    },
    {
      text: '/',
      handler: signHandler,
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
