import React from 'react';
import {inject, observer} from 'mobx-react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';

import commonStore from './stores/commonStore';
import BarcodeLoadingPage from "./layouts/BarcodeLoadingPage";

import {toast} from 'react-toastify';
import {css} from "glamor";
import LoadingScreen from "./layouts/LoadingScreen";
import ReactGA from 'react-ga';
import {GG_ANALYTIC_CODE} from "./constants";


@inject('userStore', 'commonStore')
@withRouter
@observer
class App extends React.Component {
    componentWillMount() {
        if (!this.props.commonStore.token) {
            this.props.commonStore.setAppLoaded();
        }
    }

    componentDidMount() {
        if (this.props.commonStore.token) {
            this.props.userStore
                .pullUser()
                .finally(() => this.props.commonStore.setAppLoaded());
        }
    }

    render() {
        if (this.props.commonStore.appLoaded) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/"
                            render={props => <BarcodeLoadingPage {...props} />}
                        />
                    </Switch>
                </BrowserRouter>
            );
        }
        return <LoadingScreen/>;
    }
}

export default App;
