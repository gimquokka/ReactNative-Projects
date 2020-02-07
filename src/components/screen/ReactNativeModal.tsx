import React, {useState} from 'react';

import Modal from 'react-native-modal';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 220px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const StyledModalButton = styled.TouchableOpacity`
  flex: 1;
  width: 320px;
  justify-content: center;
`;
const StyledModalGradeWrapper = styled.TouchableOpacity`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const StyledModalGradeText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const StyledModalText = styled.Text`
  align-self: center;
  color: blue;
  font-size: 15px;
`;
const HorizentalLine = styled.View`
  background-color: black;
  height: 1px;
  align-self: stretch;
`;

const StyledModalOpenButton = styled.TouchableOpacity`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const StyledModalOutputText = styled.Text`
  color: purple;
  font-size: 30px;
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

function Screen({navigation}: any): React.ReactElement {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalOutput, setModalOutput] = useState<string>(
    '학년을 선택해주세요.',
  );
  return (
    <StyledSafeAreaView>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StyledModalContainer>
          <StyledModalGradeWrapper>
            <StyledModalGradeText>학년</StyledModalGradeText>
          </StyledModalGradeWrapper>
          <HorizentalLine />
          <StyledModalButton
            onPress={() => {
              setModalOutput('예비고 1학년');
              setModalVisible(false);
            }}>
            <StyledModalText>예비고 1학년</StyledModalText>
          </StyledModalButton>
          <HorizentalLine />
          <StyledModalButton
            onPress={() => {
              setModalOutput('그냥 고 1학년');
              setModalVisible(false);
            }}>
            <StyledModalText>그냥 고 1학년</StyledModalText>
          </StyledModalButton>
          <HorizentalLine />
          <StyledModalButton
            onPress={() => {
              setModalOutput('그냥 고 2학년');
              setModalVisible(false);
            }}>
            <StyledModalText>그냥 고 2학년</StyledModalText>
          </StyledModalButton>
          <HorizentalLine />
          <StyledModalButton
            onPress={() => {
              setModalOutput('힘든 고 3학년');
              setModalVisible(false);
            }}>
            <StyledModalText>힘든 고 3학년</StyledModalText>
          </StyledModalButton>
          <HorizentalLine />
          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={{alignSelf: 'center'}}>취소</Text>
          </StyledModalButton>
        </StyledModalContainer>
      </Modal>
      <StyledModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}>
        <StyledModalOutputText> {modalOutput}</StyledModalOutputText>
      </StyledModalOpenButton>
      <StyledNextButtonWrapper>
        <StyledNextButton
          onPress={() => {
            navigation.navigate('Middle');
          }}>
          <StyledNextButtonText>Next Screen</StyledNextButtonText>
        </StyledNextButton>
      </StyledNextButtonWrapper>
    </StyledSafeAreaView>
  );
}

export default Screen;
