import React from "react";
import LoadingScreenComponent from 'react-loading-screen'

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <LoadingScreenComponent
                    loading={true}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc={require("assets/img/brand/logo.png")}
                    text={undefined}
                >
                </LoadingScreenComponent>
            </div>
        )
    }
}


export default LoadingScreen;
