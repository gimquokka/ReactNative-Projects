"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_webview_1 = require("react-native-webview");
var native_1 = require("styled-components/native");
var StyledContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"])));
var StyledText = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 50;\n  font-weight: bold;\n"], ["\n  font-size: 50;\n  font-weight: bold;\n"])));
//uri: 'https://www.iammathking.xyz/api/v1//privacy/' => 개인정보 약관
//uri: 'https://www.iammathking.xyz/api/v1//usage/ => 이용약관
function Screen() {
    return (<>
      <react_native_webview_1.WebView source={{ uri: 'https://www.iammathking.xyz/api/v1//privacy/' }} style={{ flex: 1, margin: 10 }}/>
    </>);
}
exports["default"] = Screen;
var templateObject_1, templateObject_2;
