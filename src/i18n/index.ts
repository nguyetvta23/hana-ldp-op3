import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import vi from './locales/vi.json';
import ja from './locales/ja.json';

i18n
    .use(LanguageDetector) // Tự động phát hiện ngôn ngữ của user
    .use(initReactI18next) // Kết nối i18next với React
    .init({
        resources: {
            en: { translation: en },
            vi: { translation: vi },
            ja: { translation: ja },
        },
        fallbackLng: 'vi', // Ngôn ngữ mặc định
        interpolation: {
            escapeValue: false, // React đã escape sẵn
        },
    });

export default i18n;
