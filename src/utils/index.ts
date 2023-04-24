import { Platform } from "react-native";

import { isIphoneX } from "./notchDetect";

export const IS_ANDROID = Platform.OS === "android";

export { isIphoneX };
