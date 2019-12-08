import React, { Component }     from "react";
import {
    AppRegistry,
    YellowBox,
    StatusBar,
    View,
}                           from "react-native";
import FlashMessage         from "react-native-flash-message";
import { Routes }           from "./app/pages";
import { name as appName }  from './app.json';

// Redux
import { Provider }         from "react-redux";
import { PersistGate }      from "redux-persist/integration/react";
import { persistor, store } from "./app/reducers/store";

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Provider store={ store }>
                    <StatusBar animated translucent backgroundColor="transparent" barStyle="light-content"/>
                    <PersistGate persistor={ persistor }>
                        <View style={{ flex: 1 }}>
                            <Routes/>
                            <FlashMessage duration={ 3000 } position="top"/>
                        </View>
                    </PersistGate>
                </Provider>
            </View>
        )
    }
}

YellowBox.ignoreWarnings(["componentWill", "drifted", "perform slowly"]);

AppRegistry.registerComponent(appName, () => App);
