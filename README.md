# React Native Custom Alerts

This library provides the ability to define alerts which can be used all across an application. Instead of having a separate function for all these alerts, we can define them when the application starts and easily use them wherever we need them.

## Install

```sh
 npm install react-native-custom-alerts
```

or

```sh
 yarn add react-native-custom-alerts
```

## Usage

You need to register you alerts when the application starts.

```js
import {CustomAlert} from 'react-native-custom-alerts';

CustomAlert.setup('my-custom-alert', 'Title', 'Message', buttons, options);
CustomAlert.setup('my-second-alert', 'Title', 'Message', buttons, options);
```

Now, you can place the alert you want to show elsewhere in your application.

```js
import {CustomAlert} from 'react-native-custom-alerts';

CustomAlert.alert('my-second-alert');
```

## Methods

### setup()

```js
static setup(name, title, message?, buttons?, options?)
```

### alert()

```js
static alert(name)
```

## Authors

- [**Sagar Raja Shakya**](https://github.com/thesagarshakya) - _Author_

## License

This project is licensed under the MIT License
