import {Alert, Modal, Text, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';

import styled from 'styled-components/native';

interface Props {}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.7);
`;

const StyledModalContainer = styled.View`
  height: 200;
  width: 300;
  border-radius: 11px;
  background-color: white;
`;
const StyledText = styled.Text`
  font-size: 50;
  font-weight: bold;
`;

const StyledButtonText = styled.Text`
  font-size: 30px;
`;
//이벤트를 걸어주는 버튼 류는 그냥 원래의 컴포넌틑를 가져다 쓰는 듯 함
// const StyledTouchableHighlight = styled.TouchableHighlight`
// onPress{() =>}
export default function Screen(): React.ReactElement {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <StyledSafeAreaView>
      <Text
        style={{
          position: 'absolute',
          top: 100,
          fontSize: 30,
          alignSelf: 'center',
        }}>
        Test
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
        }}>
        <StyledModalSafeAreaView>
          <StyledModalContainer>
            <StyledText>Modal Test!</StyledText>
            <TouchableHighlight
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <StyledButtonText>Modal On/Off-Button</StyledButtonText>
            </TouchableHighlight>
          </StyledModalContainer>
        </StyledModalSafeAreaView>
      </Modal>

      <TouchableHighlight
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <StyledButtonText>Modal On/Off-Button</StyledButtonText>
      </TouchableHighlight>
    </StyledSafeAreaView>
  );
}

//example code

// import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';
// import React, {Component} from 'react';

// export default class ModalExample extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible: any) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{flex: 1, backgroundColor: 'gray', opacity: 0.5}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
