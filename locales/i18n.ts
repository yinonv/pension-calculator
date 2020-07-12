import {I18nManager} from 'react-native'
import I18n from "i18n-js";
import * as Localization from 'expo-localization';

import en from "./en";
import he from "./he";

I18n.locale = Localization.locale;
I18nManager.allowRTL(Localization.isRTL)
I18nManager.forceRTL(Localization.isRTL)

I18n.fallbacks = true;
I18n.translations = {
  en,
  he
};

export default I18n;