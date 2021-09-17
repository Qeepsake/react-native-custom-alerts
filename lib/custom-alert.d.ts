/**
 * @author Sagar Raja Shakya
 * @description Setup the custom alerts
 */
import { AlertButton, AlertOptions } from 'react-native';
interface AlertParams {
    title: string;
    message?: string;
    buttons?: AlertButton[];
    options?: AlertOptions;
}
interface AlertName {
    [key: string]: AlertParams;
}
declare class CustomAlert {
    static alerts: AlertName;
    static setup(name: string, title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions): void;
    static alert(name: string): void;
}
export default CustomAlert;
