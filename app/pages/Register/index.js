import React, { Component } from "react";
import {
    TouchableOpacity,
    Dimensions,
    StatusBar
}                       from "react-native";
import { Actions }      from "react-native-router-flux";
import { connect }      from "react-redux";
import { TextField }    from "react-native-material-textfield";
import ImagePicker      from "react-native-image-picker";
import Swiper           from "react-native-swiper";
import * as Utils       from "../../helpers/utils";
import { Button }       from "../../components";
import { setUser }      from "../../actions/user";
import {
    BottomContent,
    InputTitle,
    Container,
    Picture,
    Slide,
    Title,
} from "./styles";

const { height, width } = Dimensions.get("window");

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: null
        }
    }

    index = 0

    nextSlide = () => {
        const { picture } = this.state;
        const name = this.input1.state.text;
        const balance = this.input2.state.text;

        switch (this.index) {
            case 0: {
                if (!name || name.length === 0) {
                    Utils.notificationError("Informe o seu nome corretamente");
                } else {
                    this.swiper.scrollBy(1);
                    this.input2.inputRef.current.focus();
                    this.index++;
                }

                break;
            }
            case 1: {
                if (!balance || balance.length === 0) {
                    Utils.notificationError("Informe o valor atual da sua conta corretamente");
                } else {
                    this.swiper.scrollBy(1);
                    this.index++;
                }

                break;
            }
            case 2: {
                if (!picture) {
                    Utils.notificationError("Adiciona uma imagem de perfil")
                } else {
                    this.props.setUser({
                        name: this.input1.state.text,
                        balance: parseFloat(this.input2.state.text),
                        picture: picture
                    });

                    return Actions.home();
                }

                break;
            }
        }
    }

    openPicker = () => Utils.openPicker(picture => this.setState({ picture }))

    render() {
        const { picture } = this.state;

        return (
            <Container>
                <StatusBar barStyle="dark-content"/>
                <Title>Criar Conta</Title>
                <Swiper ref={ ref => this.swiper = ref } style={{ flex: 1 }} loop={ false } showsPagination={ false } scrollEnabled={ false }>
                    <Slide>
                        <InputTitle>Qual é o seu nome?</InputTitle>
                        <TextField
                            ref={ ref => this.input1 = ref }
                            containerStyle={{ width: width-60 }}
                            label="Ex: Lucas Craveiro Paes"
                            onSubmitEditing={ this.nextSlide }
                        />
                    </Slide>
                    <Slide>
                        <InputTitle>Qual o valor atual da sua conta?</InputTitle>
                        <TextField
                            ref={ ref => this.input2 = ref }
                            containerStyle={{ width: width-60 }}
                            label="Ex: R$ 2.500"
                            keyboardType="phone-pad"
                            onSubmitEditing={ this.nextSlide }
                        />
                    </Slide>
                    <Slide style={{ alignItems: "center" }}>
                        <InputTitle style={{ fontSize: 22, textAlign: "center", paddingHorizontal: 20 }}>Adicione uma foto de perfil</InputTitle>
                        <TouchableOpacity activeOpacity={ 0.7 } onPress={ this.openPicker }>
                            <Picture source={ !picture ? require("../../assets/placeholder.png") : { uri: picture }}/>
                        </TouchableOpacity>
                    </Slide>
                </Swiper>
                <BottomContent>
                    <Button onPress={ this.nextSlide } style={{ width: width-60 }} color="#8b06bf">Próximo</Button>
                </BottomContent>
            </Container>
        )
    }
}

export default connect(null, { setUser })(Register);
