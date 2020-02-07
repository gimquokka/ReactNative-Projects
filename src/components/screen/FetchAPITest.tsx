import React from 'react';
import styled from 'styled-components/native';

const StyledCSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: black;
`;

function Screen(): React.ReactElement {
  const fetchAPIDate = (): void => {
    // fetch();
  };

  return (
    <StyledCSafeAreaView>
      <StyledText></StyledText>
    </StyledCSafeAreaView>
  );
}

export default Screen;
