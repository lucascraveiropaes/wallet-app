import React, { Component } from "react";
import * as Animatable  from "react-native-animatable";
import Icon             from "react-native-vector-icons/MaterialIcons";
import { Button }       from "./styles";

export default class FAB extends Component {
    render() {
        const { style, size, onPress, color, children, show } = this.props;
        const btnStyle = {
            width: size,
            height: size,
            borderRadius: size
        }

        return (
            <Button activeOpacity={ 0.75 } onPress={ onPress }>
                <Animatable.View
                    duration={ 350 }
                    style={{ ...btnStyle, justifyContent: "center", alignItems: "center", backgroundColor: color, elevation: 6 }}
                    animation={ show ? "bounceIn" : "bounceOut" }
                >
                    <Icon name="add" color="#FFF" size={ 60 * 0.55 }/>
                </Animatable.View>
            </Button>
        )
    }
}

FAB.defaultProps = {
    style: {},
    size: 60,
    onPress: () => null,
    color: "#3750B8",
    show: true
}
