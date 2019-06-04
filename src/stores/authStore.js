import {action, observable} from 'mobx';
import agent from '../agent';
import userStore from './userStore';
import commonStore from './commonStore';

import {toast} from "react-toastify";
import {toastStyle} from "../constants";
import ReactGA from "react-ga";

class AuthStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        username: '',
        email: '',
        password: '',
        name: '',
    };

    @action setUsername(username) {
        this.values.username = username;
    }

    @action setEmail(email) {
        this.values.email = email;
    }

    @action setPassword(password) {
        this.values.password = password;
    }

    @action setName(name) {
        this.values.name = name;
    }

    @action reset() {
        this.values.username = '';
        this.values.email = '';
        this.values.password = '';
        this.values.name = '';
    }

    /**
     * NOTE : this.values.username --> consider it as Username || Email
     * @returns
     */
    @action login() {
        this.inProgress = true;
        this.errors = undefined;

        ReactGA.event({
            category: 'User',
            action: 'Login',
            value: this.values.username
        });

        return agent.Auth.login(this.values.username, this.values.password)
            .then((user) => commonStore.setToken(user.accessToken))
            .then(() => userStore.pullUser())
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.message;
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
                //TODO: need to reset() ?? --> leak password
                this.reset();
            }));
    }

    @action signup() {
        this.inProgress = true;
        this.errors = undefined;


        ReactGA.event({
            category: 'User',
            action: 'Created an Account',
            value: this.values.username
        });

        return agent.Auth.signup(this.values.username, this.values.email, this.values.password, this.values.name)
            .then((signupResponse) => {
                if (signupResponse.success) {
                    this.login()
                        .then(() => userStore.pullUser())
                }
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    @action isLogin() {
        return commonStore.isAuth;
    }

    @action checkLogin() {
        if (commonStore.isAuth) {
            return true;
        }
        else {
            toast.info("Vui lòng đăng nhập trước!", toastStyle);
            return false;
        }
    }

    @action logout() {
        ReactGA.event({
            category: 'User',
            action: 'Logout',
            value: this.values.username ? this.values.username : "undefined"
        });

        commonStore.setToken(undefined);
        userStore.forgetUser();
        this.reset();
        return Promise.resolve();
    }
}

export default new AuthStore();
