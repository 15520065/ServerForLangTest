import React from 'react';
import {withRouter} from 'react-router-dom';
// reactstrap components
import {inject, observer} from "mobx-react";
import {KbnValue} from "../constants/KbnValue";
import LoadingScreen from "./LoadingScreen";

class BarcodeLoadingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: <LoadingScreen/>
        };
    }

    render() {
        return (
            <>
                {this.state.data}
            </>
        );
    }
}

export default BarcodeLoadingPage;
