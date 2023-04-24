import jest from "jest";

jest.useFakeTimers();
Date.now = jest.fn(() => 1503187200000);

jest.mock("axios");

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
