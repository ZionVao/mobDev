import React from 'react';
import styled from 'styled-components/native';
import { IButtonItem } from '../../interfaces/IButtonItem';

const ButtonView = styled.View`
  background: darkslategrey;
  width: 60px;
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  margin: 15px;
`;

const ButtonText = styled.Text`
  color: aliceblue;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export function ButtonItem({ text, handler }: IButtonItem) {
  return (
    <ButtonView
      onTouchStart={(event) => {
        event.preventDefault();
        handler(text);
      }}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonView>
  );
}
