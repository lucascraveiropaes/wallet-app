import React, { Component } from "react";
import { Dimensions }       from "react-native";
import { connect }          from "react-redux";
import { TextField }        from "react-native-material-textfield";
import { updateInfo }       from "../../actions/user";
import * as Utils           from "../../helpers/utils";
import BaseModal            from "../BaseModal";
import {
    PictureContainer,
    ModalContainer,
    ModalTitle,
    Picture,
    Button,
} from "../styles";

const { height, width } = Dimensions.get("window");

class UpdateInfo extends Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();

        this.state = {
            ...props.user,
        }
    }

    componentDidMount = () => this.inputName.current.setValue(this.state.name);

    closeModal = () => this.modal.close();

    openPicker = () => Utils.openPicker(picture => this.setState({ picture }))

    saveInfo = () => {
        const { current: field } = this.inputName;

        this.props.updateInfo({
            ...this.state,
            name: field.state.text
        });

        this.closeModal();
    }

    render() {
        const { name, picture } = this.state;

        return (
            <BaseModal myRef={ ref => this.modal = ref }>
                <ModalContainer style={{ maxHeight: 700, alignItems: "center" }}>
                    <ModalTitle style={{ opacity: 0.75 }}>Atualizar informações</ModalTitle>

                    <PictureContainer activeOpacity={ 0.7 } onPress={ this.openPicker }>
                        <Picture source={{ uri: picture }}/>
                    </PictureContainer>

                    <TextField
                        ref={ this.inputName }
                        containerStyle={{ width: width-60 }}
                        label="Ex: Lucas Craveiro Paes"
                        onSubmitEditing={ this.nextSlide }
                    />

                <Button onPress={ this.saveInfo }>Salvar Dados</Button>
                </ModalContainer>
            </BaseModal>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: { ...state.user.user }
})

export default connect(mapStateToProps, { updateInfo })(UpdateInfo);
