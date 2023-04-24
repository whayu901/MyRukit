[![Logo Optimus](https://www.rukita.co/static/img/rukita-d.svg)](https://rukita.co)

[![Code Quality](https://github.com/whayu901/MyRukit/actions/workflows/code-quality.yml/badge.svg)](https://github.com/whayu901/MyRukit/actions/workflows/code-quality.yml)

# RUKITA TEST MOBILE ENGINEER

i have finished for test mobile engineer that i should create app using Rick and Morty API. At below i will attach several proof image for this test.

## Image proof for home screen

![Simulator Screen Shot - iPhone 13 - 2023-03-13 at 17 45 11](https://user-images.githubusercontent.com/32776398/224694105-5d1e6ccb-a6fa-4fb2-9938-83a0e1d3bb36.png)

## Image proof for detail screen

![Simulator Screen Shot - iPhone 13 - 2023-03-13 at 17 44 51](https://user-images.githubusercontent.com/32776398/224694482-34456d8c-b99a-49c2-8117-cfaabff194a1.png)

### Getting Started

#### 1. Install node.js

Please be sure to have node.js to run this app Download [Node.JS](https://nodejs.org/en/)

#### 2. Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

- Install Android Studio

- Install the Android SDK

- Configure the ANDROID_HOME environment variable

- The last one you must check your [SDK License are accepted ](https://stackoverflow.com/questions/39760172/you-have-not-accepted-the-license-agreements-of-the-following-sdk-components)

#### 3. iOS development environment

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.
While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

#### 4. Install React Native globally

Please be sure to react-native cli to run this app, npm install react-native -g

#### 5. Clone the repository

you can clone this repository at [Test Repository](https://github.com/whayu901/MyRukit) and after that doing command:

```
cd MyRukit
```

#### 6. Run the application

To start developing this app yu can follow this step:

- Type npm install and type npm run android or npm run ios:dev, the app will appear automatically in development mode.

- Finish, yeay~ Your App installation progress is done.

> (optional) if your localy instalation sdk failed, this first run must be error.
> just go to local.properties at the rootFiles/android and change the username at the file into your username on this computer and go back at the first step

## Ios

Open 2 tabs for running metro server & running IOS platform. Please make sure ur simulator / device is connected correctly.

```
yarn install
```

for ios:

```
yarn ios


```

### Unit Testing

```
yarn test -u

```

## Library that used

### @react-navigation/native

requires

```
yarn add @react-navigation/stack react-native-gesture-handler react-native-safe-area-context react-native-screens
```

Manage application's navigation between screens.

### axios

Manage API calls and handles its responses.

### react-native-skeleton-placeholder

requires

```
react-native-skeleton-placeholder
```

Display skeleton loading.

### babel-plugin-module-resolver

requires

```
babel-plugin-module-resolver
```

for management folder structures
