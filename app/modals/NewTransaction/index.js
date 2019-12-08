import React, { Component } from "react";
import { connect }          from "react-redux";
import { TextField }        from "react-native-material-textfield";
import { newTransaction }   from "../../actions/user";
import { Picker }           from "../../components";
import * as Utils           from "../../helpers/utils";
import BaseModal            from "../BaseModal";
import {
    ModalContainer,
    ErrorMessage,
    ModalTitle,
    Button,
} from "../styles";

class NewTransaction extends Component {
    constructor(props) {
        super(props);
        this.modal = null;

        this.state = {
            type: "in",
            descriptionError: null,
            amountError: null,
        }
    }

    closeModal = () => this.modal.close();

    setTransaction = type => this.setState({ type });

    saveTransaction = () => {
        const description = this.descriptionInput.state.text;
        const amount = this.amountInput.state.text;
        const type = this.state.type;

        if (!amount || amount.length === 0)
            return this.setState({ amountError: "Preencha a quantidade corretamente", descriptionError: null });

        if (!description || description.length === 0)
            return this.setState({ descriptionError: "Preencha a descrição corretamente", amountError: null });

        this.props.newTransaction({ amount, description, type });
        return this.closeModal();
    }

    resetError = text => {
        this.setState({ descriptionError: null, amountError: null })
        return text;
    }

    render() {
        const { type, descriptionError, amountError } = this.state;

        return (
            <BaseModal myRef={ ref => this.modal = ref }>
                <ModalContainer style={{ maxHeight: 700 }}>
                    <ModalTitle>Adicionar transação</ModalTitle>

                    <Picker
                        title="Qual é o tipo de transação?"
                        onChange={ this.setTransaction }
                        value={ type }
                        options={[{
                            value: "in",
                            label: "Entrada"
                        }, {
                            value: "out",
                            label: "Saída"
                        }]}
                    />

                    <TextField
                        ref={ ref => this.amountInput = ref }
                        containerStyle={{ width: "100%", marginTop: 0 }}
                        label="Qual é o valor da transação?"
                        keyboardType="phone-pad"
                        formatText={ this.resetError }
                        onSubmitEditing={ this.amountInput ? this.amountInput.inputRef.current.focus : () => null }
                    />

                    {(amountError) && (
                        <ErrorMessage>{ amountError }</ErrorMessage>
                    )}

                    <TextField
                        ref={ ref => this.descriptionInput = ref }
                        containerStyle={{ width: "100%", marginTop: -5 }}
                        label="Adicione uma descrição"
                        onSubmitEditing={ this.saveTransaction }
                    />

                    {(descriptionError) && (
                        <ErrorMessage>{ descriptionError }</ErrorMessage>
                    )}

                    <Button onPress={ this.saveTransaction }>Salvar Transação</Button>
                </ModalContainer>
            </BaseModal>
        )
    }
}

export default connect(null, { newTransaction })(NewTransaction);
