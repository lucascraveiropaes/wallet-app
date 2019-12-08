# Wallet App

An app to control your entire financial flow.   
Obs.: This app was developed and tested on the Android platform.

## Documentation

- [Showroom](#showroom)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [File Structure](#file-structure)
- [Components](#components)
- [Contribute](/docs/CONTRIBUTE.md)

## Showroom

App screens

<img src="docs/images/1.png" width="256px" style="margin: 5px" /><img src="docs/images/2.png" width="256px" style="margin: 5px" /><img src="docs/images/3.png" width="256px" style="margin: 5px" /><img src="docs/images/4.png" width="256px" style="margin: 5px" />
<img src="docs/images/5.png" width="256px" style="margin: 5px" /><img src="docs/images/6.png" width="256px" style="margin: 5px" /><img src="docs/images/7.png" width="256px" style="margin: 5px" /><img src="docs/images/8.png" width="256px" style="margin: 5px" />
<img src="docs/images/9.png" width="256px" style="margin: 5px" /><img src="docs/images/10.png" width="256px" style="margin: 5px" />

## Getting Started

First step: clone the repository

```bash
git clone https://github.com/lucascraveiropaes/wallet-app.git
```

Then you can download all dependencies:

```bash
npm install
```

And finally, you run de command to install the app in your devide (it only works for android):

```bash
npm run install-app
```

## Dependencies

* [Axios](https://github.com/axios/axios/) - A Container for HTTP requests
* [Redux](https://github.com/reduxjs/redux) - A State Container for JS
* [React Redux](https://github.com/reduxjs/react-redux) - Official react bindings for Redux
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate the redux store
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware for async actions
* [React Native Animatable](https://github.com/oblador/react-native-animatable) - Standard set of easy to use animations and declarative transitions for React Native
* [React Native Flash Message](https://github.com/lucasferreira/react-native-flash-message) - React Native flashbar and top notification alert utility
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) - The first declarative React Native router
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native
* [React Native Image Picker](https://github.com/react-native-community/react-native-image-picker/) - A React Native module that allows you to use native UI to select a photo/video from the device library or directly from the camera
* [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient/) - A dependency to create linear gradients for views.
* [React Native Material Textfield](https://github.com/n4kz/react-native-material-textfield) - A texfield with Material Design and consistent behaviour on iOS and Android
* [React Native Swiper](https://github.com/react-native-community/react-native-linear-gradient/) - A dependency that creates animated transitions between views, like a carousel.
* [Styled Components](https://github.com/styled-components/styled-components) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.

## File Structure

```
wallet-app
└───android/
└───app/
│   └───actions/
│   └───assets/
│   └───components/
│   └───helpers/
│   └───modals/
│   └───pages/
│   └───reducers/
└───docs/
└───ios/
│   index.js
│   README.md
```

## Components

All the components can be imported from the root of the component folder, for example:

```js
import { Button } from "../components/";
```

### Button

**Usage**

```js
<Button>Some text</Button>
```

**API**

|    Props    |   Type   |  Default   |
| ----------- | -------- | ---------- |
| onPress     | function | () => null |
| style       | object   | {}         |
| textStyle   | object   | {}         |
| transparent | bool     | false      |

### FAB

**Usage**

```js
<FAB onPress={ onPress } show={ true }/>
```

**API**

|    Props    |   Type   |  Default   |
| ----------- | -------- | ---------- |
| onPress     | function | () => null |
| style       | object   | {}         |
| size        | number   | 60         |
| color       | text     | #3750B8    |
| show        | bool     | true       |

### Picker

**Usage**

```js
<Picker
    title="Picker title"
    onChange={ onChange }
    value={ value }
    options={[{
        value: 1,
        label: "One"
    }, {
        value: 2,
        label: "Two"
    }]}
/>
```

**API**

|    Props    |   Type   |  Default   |
| ----------- | -------- | ---------- |
| onChange    | function | () => null |
| style       | object   | {}         |
| value       | mixed    | null       |
| options     | array    | []         |
| title       | text     | null       |
