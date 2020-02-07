import {} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

function Screen(): React.ReactElement {
  const StyledContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;
  const StyledText = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: purple;
  `;

  return (
    <StyledContainer>
      <StyledText>Testing Page!</StyledText>
    </StyledContainer>
  );
}

export default Screen;
