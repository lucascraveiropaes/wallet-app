import React, { Component } from "react";
import { FlatList }         from "react-native";
import { Actions }          from "react-native-router-flux";
import { connect }          from "react-redux";
import LinearGradient       from "react-native-linear-gradient";
import Icon                 from "react-native-vector-icons/MaterialIcons";
import * as Utils           from "../../helpers/utils";
import { undoTransaction }  from "../../actions/user";
import { WalletCard, FAB }  from "../../components";
import {
    BalanceCard,
    BalanceText,
    MenuButton,
    Container,
    Picture,
    Balance,
    Divider,
    Header,

    TDescription,
    TContainer,
    TRedLine,
    TOverlay,
    TAmount,
    THeader,
    TRight,
    TType,
    TLeft,
    TDate,
    TRow,

    EmptyContainer,
    EmptyText
} from "./styles";

const typeData = {
    "in": {
        color: "blue",
        text: "Entrada"
    },
    "out": {
        color: "red",
        text: "Saída"
    }
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openIndex: -1,
            showFAB: true,
        }
    }

    toggleOpen = openIndex => this.setState({ openIndex: this.state.openIndex === openIndex ? -1 : openIndex });

    showUndoAlert = id => Utils.oneActionAlert("Deseja desfazer essa transação?", "Ela irá continuar no histórico, mas o saldo será reajustado.", () => {
        this.props.undoTransaction(id);
    });

    Transaction = ({ amount, type, date, description, index, id, undone }) => (
        <TContainer transparent onPress={() => this.toggleOpen(index)} onLongPress={() => this.showUndoAlert(id)} delayLongPress={ 600 }>
            <TRow style={[ undone && { opacity: 0.5 }]}>
                <TRight>
                    <TAmount>R$ { amount }</TAmount>
                    <TType style={{ color: typeData[type].color }}>{ typeData[type].text }</TType>
                </TRight>
                <TLeft>
                    <TDate>{ Utils.getDate(date) } às { Utils.getTime(date) }</TDate>
                </TLeft>
            </TRow>
            {(index === this.state.openIndex) && (
                <TDescription>{ description }</TDescription>
            )}
            {(undone) && (
                <TOverlay>
                    <TRedLine/>
                </TOverlay>
            )}
        </TContainer>
    )

    y = 0

    onScroll = ({ nativeEvent }) => {
        if (this.props.transactions.length > 0) {
            const v = nativeEvent.contentOffset.y - this.y;

            if (v < 0 || nativeEvent.contentOffset.y === 0)
                this.setState({ showFAB: true });

            if (v >= 1 && nativeEvent.contentOffset.y > 0)
                this.setState({ showFAB: false });

            this.y = nativeEvent.contentOffset.y;
        }
    }

    render() {
        const { Transaction, props: { user, transactions }, state: { showFAB }} = this;

        return (
            <Container>
                <LinearGradient colors={["#447AD1", "#2F71CD", "#3750B8"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
                    <Header>
                        <MenuButton transparent onPress={ Actions.menu }>
                            <Icon name="menu" color="#FFF" size={ 30 }/>
                        </MenuButton>
                        <Picture source={{ uri: user.picture }}/>
                    </Header>
                </LinearGradient>
                <BalanceCard>
                    <BalanceText>Seu saldo atual é de:</BalanceText>
                    <Balance>R$ { Utils.numberWithCommas(user.balance) }</Balance>
                </BalanceCard>
                <FlatList
                    onScroll={ this.onScroll }
                    data={ transactions }
                    renderItem={ ({ item, index }) => <Transaction { ...item } index={ index }/> }
                    keyExtractor={ (i, k) => `${k}` }
                    ItemSeparatorComponent={ Divider }
                    ListHeaderComponent={ THeader }
                    ListEmptyComponent={(
                        <EmptyContainer>
                            <EmptyText>Você ainda não possui nenhuma transação registrada</EmptyText>
                        </EmptyContainer>
                    )}
                />
                <FAB onPress={ Actions.newTransaction } show={ showFAB }/>
            </Container>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: { ...state.user.user },
    transactions: [ ...state.user.transactions ],
})

export default connect(mapStateToProps, { undoTransaction })(Home);
