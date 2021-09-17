"use strict";
/**
 * @author Sagar Raja Shakya
 * @description Setup the custom alerts
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* NPM - Node Package Manage */
var react_native_1 = require("react-native");
var CustomAlert = /** @class */ (function () {
    function CustomAlert() {
    }
    CustomAlert.setup = function (name, title, message, buttons, options) {
        CustomAlert.alerts[name] = { title: title, message: message, buttons: buttons, options: options };
    };
    CustomAlert.alert = function (name) {
        var _a = CustomAlert.alerts[name], title = _a.title, message = _a.message, buttons = _a.buttons, options = _a.options;
        react_native_1.Alert.alert(title, message, buttons, options);
    };
    CustomAlert.alerts = {};
    return CustomAlert;
}());
exports.default = CustomAlert;
