import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const RootView = styled.View`
  height: 100%;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  border-radius: 24px;
  border-color: #505050;
  border-width: 7px;
  border-style: solid;
  height: 20%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 20px;
`;

export function Root() {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <RootView>
      <Button
        style={status && { backgroundColor: 'lightgreen' }}
        onPress={() => setStatus(!status)}
      >
        <StyledText>New Button</StyledText>
      </Button>
    </RootView>
  );
}
