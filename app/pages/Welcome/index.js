import React, { Component } from "react";
import {
    Dimensions,
    StatusBar
}                       from "react-native";
import { Actions }      from "react-native-router-flux";
import Swiper           from "react-native-swiper";
import { Button }       from "../../components";
import {
    BottomContent,
    Container,
    Picture,
    Slide,
    Title,
    Text,
} from "./styles";

const { height, width } = Dimensions.get("window");

export default class Welcome extends Component {
    index = -1

    nextSlide = () => {
        this.index++;

        if (this.index < 1) {
            this.swiper.scrollBy(1);
        } else {
            Actions.register();
        }
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle="dark-content"/>
                <Swiper ref={ ref => this.swiper = ref } style={{ flex: 1 }} loop={ false } scrollEnabled={ false }>
                    <Slide>
                        <Picture source={ require("../../assets/img-1.png") }/>
                        <Title>Controle Total</Title>
                        <Text>Mantenha todo o seu controle financeiro, desde histórico de transações, até relatórios completos.</Text>
                    </Slide>
                    <Slide>
                        <Picture source={ require("../../assets/img-2.png") }/>
                        <Title>Em qualquer lugar</Title>
                        <Text>Tenha acesso a tudo que o app oferece, de qualquer lugar, em qualquer hora.</Text>
                    </Slide>
                </Swiper>
                <BottomContent>
                    <Button onPress={ this.nextSlide } style={{ width: width-60 }} color="#8b06bf">Próximo</Button>
                </BottomContent>
            </Container>
        )
    }
}
