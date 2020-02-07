import {Text, View} from 'react-native';

import React from 'react';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';

interface Props {}

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 50;
  font-weight: bold;
`;

//uri: 'https://www.iammathking.xyz/api/v1//privacy/' => 개인정보 약관
//uri: 'https://www.iammathking.xyz/api/v1//usage/ => 이용약관
export default function Screen(): React.ReactElement {
  return (
    <>
      <WebView
        source={{uri: 'https://www.iammathking.xyz/api/v1//privacy/'}}
        style={{flex: 1, margin: 10}}
      />
    </>
  );
}
