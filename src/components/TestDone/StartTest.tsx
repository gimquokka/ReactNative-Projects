import {} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

interface Props {}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 80;
  width: 200;
  background-color: purple;
  border-radius: 15;
  justify-content: center;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-size: 30;
`;

export default function Screen() {
  return (
    <StyledSafeAreaView>
      <StyledTouchableOpacity>
        <StyledButtonText>Test Start</StyledButtonText>
      </StyledTouchableOpacity>
    </StyledSafeAreaView>
  );
}
