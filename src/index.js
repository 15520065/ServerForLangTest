import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/vendor/openIconic/font/css/open-iconic-bootstrap.css';
import 'assets/scss/argon-dashboard-react.scss';

import promiseFinally from 'promise.prototype.finally';

import {Provider} from 'mobx-react';

import {HashRouter} from 'react-router-dom';
import {configure} from 'mobx';
import App from './App';

import articlesStore from './stores/articlesStore';
import commentsStore from './stores/commentsStore';
import authStore from './stores/authStore';
import inputDataListStore from './stores/inputDataListStore';
import inputDataStore from './stores/inputDataStore';
import barcodeStore from './stores/barcodeStore';
import commonStore from './stores/commonStore';
import editorStore from './stores/editorStore';
import userStore from './stores/userStore';
import profileStore from './stores/profileStore';
import i18n from "i18next";
import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";
import {languageDefault} from "./constants";

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();

configure({
    enforceActions: 'observed'
});

const stores = {
    articlesStore,
    commentsStore,
    authStore,
    inputDataListStore,
    inputDataStore,
    commonStore,
    barcodeStore,
    editorStore,
    userStore,
    profileStore
};

i18n
    .init({
        fallbackLng: languageDefault.i18nDefault,
        lng: languageDefault.i18nDefault,
        interpolation: { escapeValue: false },
        resources: {
            en: {
                translation: common_en
            },
            vi: {
                translation: common_vi
            },
        },
        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: true,
        }
    });


ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
