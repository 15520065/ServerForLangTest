import React from 'react';
// reactstrap components
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
