import React from 'react';
import styled from 'styled-components/native';

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

export function ButtonItem({ label }: { label: string }) {
  return (
    <ButtonView>
      <ButtonText>{label}</ButtonText>
    </ButtonView>
  );
}
