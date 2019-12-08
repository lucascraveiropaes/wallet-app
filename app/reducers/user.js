import * as c       from "../helpers/constants";
import * as Utils   from "../helpers/utils";

let initialState = {
    transactions: [],
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case c.SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case c.UPDATE_USER: {
            try {
                Utils.notificationSuccess("Dados atualizados com sucesso!");

                console.log({
                    ...state.user,
                    ...action.data
                });

                return {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.data
                    }
                }
            } catch (e) {
                Utils.notificationError("Erro ao atualizar os dados");
                return state;
            }
        }

        case c.NEW_TRANSACTION: {
            try {
                let { transactions, user } = state;
                let { amount, type } = action.data;
                amount = parseFloat(amount);

                transactions.unshift({
                    ...action.data,
                    id: (new Date()).getTime(),
                    date: new Date(),
                    amount
                });

                if (type === "in") {
                    user.balance += amount;
                } else {
                    user.balance -= amount;
                }

                Utils.notificationSuccess("Transação adicionada com sucesso!");

                return {
                    ...state,
                    transactions,
                    user,
                }
            } catch (e) {
                Utils.notificationError("Erro ao adicionar a transação");
                return state;
            }
        }

        case c.UNDO_TRANSACTION: {
            try {
                let { transactions, user } = state;
                const index = transactions.findIndex(el => el.id === action.id);

                if (transactions[index].type === "in") {
                    if (transactions[index].undone) {
                        user.balance += transactions[index].amount;
                    } else {
                        user.balance -= transactions[index].amount;
                    }
                } else {
                    if (transactions[index].undone) {
                        user.balance -= transactions[index].amount;
                    } else {
                        user.balance += transactions[index].amount;
                    }
                }

                transactions[index].undone = !transactions[index].undone;

                Utils.notificationSuccess("Transação atualizar com sucesso!");

                return {
                    ...state,
                    transactions,
                    user,
                }
            } catch (e) {
                console.log(e);
                Utils.notificationError("Erro ao atualizar a transação");
                return state;
            }
        }

        case c.LOGOUT: {
            return initialState;
        }

        default:
            return state;
    }
};
