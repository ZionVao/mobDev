import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const RootView = styled.View`
  height: 100%;
  width: 100%;
  background: darkcyan;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7%;
`;

const SpaceBetweenView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
`;

const CenterView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  border-radius: 5px;
  background: lightcyan;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const MediumButton = styled.TouchableOpacity`
  border-radius: 5px;
  background: lightcyan;
  width: 49%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigButton = styled.TouchableOpacity`
  border-radius: 5px;
  background: lightcyan;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Root() {
  return (
    <RootView>
      <SpaceBetweenView>
        <MediumButton>
          <Text>Left 50%</Text>
        </MediumButton>
        <MediumButton>
          <Text>Right 50%</Text>
        </MediumButton>
      </SpaceBetweenView>
      <CenterView>
        <Button style={{ marginRight: '2%' }}>
          <Text>Center_Left</Text>
        </Button>
        <Button>
          <Text>Center</Text>
        </Button>
        <Button style={{ marginLeft: '2%' }}>
          <Text>Center_Right</Text>
        </Button>
      </CenterView>
      <SpaceBetweenView>
        <BigButton>
          <Text>Bottom</Text>
        </BigButton>
      </SpaceBetweenView>
    </RootView>
  );
}
