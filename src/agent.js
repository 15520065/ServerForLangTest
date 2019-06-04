import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';
import {API_ROOT} from "./constants";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT_URL = process.env.API_URL || API_ROOT;

const encode = encodeURIComponent;

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        authStore.logout();
    }
    return err;
};

const toastError = (str) => {
    if (str) {
        console.log(str)
    }else {
        console.log("Đã có lỗi xảy ra. Vui lòng thử lại!");
    }
};

const responseBody = res => res.body;

const tokenPlugin = req => {
    if (commonStore.token) {
        req.set('Authorization', `Bearer ${commonStore.token}`);
    }
};

const requests = {
    get: url =>
        superagent
            .get(`${API_ROOT_URL}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT_URL}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT_URL}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    del: url =>
        superagent
            .del(`${API_ROOT_URL}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
};

const Auth = {
    login: (usernameOrEmail, password) =>
        requests.post('/auth/login', {'usernameOrEmail': usernameOrEmail, 'password': password}),
    signup: (username, email, password, name) =>
        requests.post('/auth/signup', {username, email, password, name}),
    current: () =>
        requests.get('/auth'),
    save: user =>
        requests.put('/user', {user})
};

const InputDataList = {
    getInputDataList: (page, size) =>
        requests.get('/inputdata' + '?page=' + page + '&size=' + size),
    findInputDataList: (findvalue) =>
        requests.get('/inputdata/find' + '?findvalue=' + findvalue)
};

const InputData = {
    save: (inputDataRequest) =>
        requests.post('/inputdata/create', inputDataRequest),
    update: (inputDataRequest) =>
        requests.post('/inputdata/update', inputDataRequest),
    delete: (inputDataId) =>
        requests.post('/inputdata/delete?inputDataId=' + inputDataId),
    loadByInputDataCode: (inputDataCode) => // load trigger scan time
        requests.get('/inputdata/public/scan/?inputDataCode=' + inputDataCode)
};

const Barcode = {
    generate: (str, imageProp) =>
        requests.post('/barcode/public', {str: str,imageProp:imageProp})
};

const Feedback = {
    sendFeedback: (content, image) =>
        requests.post('/feedback/public', {content:content, image:image})
};

export default {
    Auth,
    InputDataList,
    InputData,
    Barcode,
    Feedback,
    toastError
};
