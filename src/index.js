import React from 'react';
import ReactDOM from 'react-dom';

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



ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
