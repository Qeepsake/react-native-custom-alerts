/**
 * @author Sagar Raja Shakya
 * @description Setup the custom alerts
 */

/* NPM - Node Package Manage */
import {Alert, AlertButton, AlertOptions} from 'react-native';

interface AlertParams {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

interface AlertName {
  [key: string]: AlertParams;
}

class CustomAlert {
  static alerts: AlertName = {};

  static setup(
    name: string,
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
  ): void {
    CustomAlert.alerts[name] = {title, message, buttons, options};
  }

  static alert(name: string): void {
    const {title, message, buttons, options} = CustomAlert.alerts[name];

    Alert.alert(title, message, buttons, options);
  }
}

export default CustomAlert;
