import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { WrapperView } from './view/WrapperView';
import { NumberInput } from './input/NumberInput';
import { CenterSpaceEvenlyView } from './view/CenterSpaceEvenlyView';
import { PrimaryWhiteText } from './text/PrimaryWhiteText';
import { Select } from './input/Select';
import { DefaultTextInput } from './input/DefaultTextInput';
import { DefaultButton } from './button/DefaultButton';
import { PrimaryBlackText } from './text/PrimaryBlackText';
import { RootView } from './view/RootView';

export function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operationSign, setOperationSign] = useState('+');
  const [result, setResult] = useState('');

  const operations = ['+', '-', '*', '/'];

  const calculate = () => {
    if (firstNumber && secondNumber) {
      setResult(
        evaluate(`${firstNumber} ${operationSign} ${secondNumber}`).toString(),
      );
    }
  };

  return (
    <RootView>
      <WrapperView>
        <NumberInput onChange={setFirstNumber} value={firstNumber} />
        <NumberInput onChange={setSecondNumber} value={secondNumber} />
        <CenterSpaceEvenlyView>
          <PrimaryWhiteText>Операція</PrimaryWhiteText>
          <Select handleChange={setOperationSign} values={operations} />
        </CenterSpaceEvenlyView>
        <CenterSpaceEvenlyView>
          <PrimaryWhiteText>Результат</PrimaryWhiteText>
          <DefaultTextInput editable={false} value={result} />
        </CenterSpaceEvenlyView>
        <DefaultButton onPress={calculate}>
          <PrimaryBlackText>Обрахувати</PrimaryBlackText>
        </DefaultButton>
      </WrapperView>
    </RootView>
  );
}
