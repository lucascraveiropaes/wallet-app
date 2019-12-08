import React, { Component } from "react";
import LinearGradient       from "react-native-linear-gradient";
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Text,
    View,
} from "react-native";

export default class Button extends Component {
    render() {
        const { style, textStyle, children, onPress, color, transparent } = this.props;
        const Touchable = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
        const Gradient = transparent ? View : LinearGradient;

        const Content = () => (typeof children === "string") ? (
            <Text style={[ styles.text, textStyle ]}>{ children }</Text>
        ) : (
            children
        );

        return (
            <Touchable onPress={ onPress } activeOpacity={ 0.75 } useForeground background={ TouchableNativeFeedback.SelectableBackground() }>
                {(transparent) ? (
                    <View style={[ styles.button, style ]}>
                        <Content/>
                    </View>
                ) : (
                    <Gradient style={[ styles.button, style ]} colors={["#447AD1", "#2F71CD", "#3750B8"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
                        <Content/>
                    </Gradient>
                )}
            </Touchable>
        )
    }
}

Button.defaultProps = {
    style: {},
    textStyle: {},
    onPress: () => null,
    children: null,
    transparent: false,
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 15,
        height: 50,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        elevation: 4,
        width: "60%"
    },

    text: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "400"
    }
})
