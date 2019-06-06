import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import BarcodeLoadingPage from "./layouts/BarcodeLoadingPage";

import LoadingScreen from "./layouts/LoadingScreen";
import GetData from "./layouts/GetData";
import {observer} from "mobx-react";

@withRouter
@observer
class App extends React.Component {
    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/a"
                        render={props => <GetData {...props} />}
                    />
                    <Route
                        path="/"
                        render={props => <BarcodeLoadingPage {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
