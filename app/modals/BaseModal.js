import React, { Component } from "react";
import {
    View,
    Modal,
    StatusBar,
    StyleSheet,
    TouchableWithoutFeedback,
}                       from "react-native";
import { Actions }      from "react-native-router-flux";
import { connect }      from "react-redux";
import * as Animatable  from "react-native-animatable";
import * as Utils       from "../helpers/utils";

export default class BaseModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: "fadeInUpBig",
            modal: true
        }
    }

    close = (nextPage) => {
        this.setState({ animation: "fadeOutDownBig" }, () => {
            Utils._setTimeout(() => {
                Actions.pop();

                if (typeof nextPage === "function") Utils._setTimeout(nextPage, 100);
            }, 300);
        });
    }

    componentDidMount() {
        this.props.myRef(this);
    }

    render() {
        const { animation, modal } = this.state;

        return (
            <Modal
                animationType="fade"
                transparent={ true }
                visible={ modal }
                onRequestClose={ this.close }>
                <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={ this.close }>
                        <View style={ styles.background }>
                            <StatusBar backgroundColor="rgba(0,0,0,0.49)"/>
                            <Animatable.View style={{ flex: 1, zIndex: 1 }} animation={ animation } useNativeDriver duration={ 700 }>
                                <TouchableWithoutFeedback>
                                    { this.props.children }
                                </TouchableWithoutFeedback>
                            </Animatable.View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        )
    }
}

BaseModal.defaultProps = {
    myRef: () => null
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.49)"
    }
});
