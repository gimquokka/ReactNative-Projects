import 'react-native-gesture-handler';

import App from './App.tsx';
import {AppRegistry} from 'react-native';
import MModal from './src/components/screen/Medium_Modal';
// import ModalTest from './src/components/screen/BasicModalTest.tsx';
// import WebView from './src/components/screen/WebView.tsx';
import Modal from './src/components/screen/ReactNativeModal.tsx';
// import StartTest from './src/components/TestDone/StartTest.tsx';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MModal);
