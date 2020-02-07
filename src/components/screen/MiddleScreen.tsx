import {} from 'react-native';

import React, {useState} from 'react';

import styled from 'styled-components/native';

interface Props {}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledUpperContainerView = styled.TouchableOpacity`
  flex: 3;
`;
const StyledNextButtonWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledNextButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  justify-content: center;
  background-color: purple;
  border-radius: 15px;
`;

const StyledNextButtonText = styled.Text`
  color: white;
  font-weight: bold;
  align-self: center;
`;

export default function Screen({navigation}: any): React.ReactElement {
  return (
    <StyledSafeAreaView>
      <StyledUpperContainerView />
      <StyledNextButtonWrapper>
        <StyledNextButton
          onPress={() => {
            navigation.navigate('Testing');
          }}>
          <StyledNextButtonText>Start Test</StyledNextButtonText>
        </StyledNextButton>
      </StyledNextButtonWrapper>
    </StyledSafeAreaView>
  );
}
