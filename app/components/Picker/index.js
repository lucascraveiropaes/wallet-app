import React, { Component } from "react";
import {
    Picker as RNPicker,
    Container,
    Text
} from "./styles";

export default class Picker extends Component {
    render() {
        const { value, onChange, style, options, title } = this.props;
        return (
            <Container>
                <Text>{ title }</Text>
                <RNPicker selectedValue={ value } onValueChange={ onChange } style={{ height: 50, width: "100%", ...style }}>
                    { options.map(el => (
                        <RNPicker.Item { ...el } key={ el.value } />
                    )) }
                </RNPicker>
            </Container>
        )
    }
}
