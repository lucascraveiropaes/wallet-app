import React, { Component } from "react";
import { FlatList }         from "react-native";
import { Actions }          from "react-native-router-flux";
import { connect }          from "react-redux";
import Icon                 from "react-native-vector-icons/MaterialIcons";
import { logout }           from "../../actions/user";
import * as Utils           from "../../helpers/utils";
import BaseModal            from "../BaseModal";
import {
    ModalContainer,
    ModalTitle,
    MenuOption,
    OptionText,
    Divider,
} from "../styles";

class Menu extends Component {
    closeModal = () => this.modal.close();

    logout = () => Utils.oneActionAlert("Deseja fazer logout?", "Todos os seus dados serão perdidos", () => {
        this.props.logout();
        Actions.welcome();
    })

    updateInfo = () => this.modal.close(Actions.updateInfo);

    render() {
        const options = [{
            icon: "exit-to-app",
            text: "Sair do app",
            onPress: this.logout
        }, {
            icon: "account-circle",
            text: "Atualizar informações",
            onPress: this.updateInfo
        }]

        return (
            <BaseModal myRef={ ref => this.modal = ref }>
                <ModalContainer>
                    <ModalTitle style={{ opacity: 0.75 }}>Selecione uma opção</ModalTitle>

                    <FlatList
                        style={{ marginBottom: -10, marginTop: -10 }}
                        data={ options }
                        renderItem={ ({ item }) => (
                            <MenuOption transparent onPress={ item.onPress }>
                                <Icon name={ item.icon } color="#000" size={ 30 }/>
                                <OptionText>{ item.text }</OptionText>
                            </MenuOption>
                        )}
                        keyExtractor={ ({ icon }) => icon }
                        ItemSeparatorComponent={ Divider }
                    />
                </ModalContainer>
            </BaseModal>
        )
    }
}

export default connect(null, { logout })(Menu);
