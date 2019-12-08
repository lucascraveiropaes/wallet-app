import {
    createStore,
    applyMiddleware }       from "redux";
import {
    persistStore,
    persistReducer }        from "redux-persist";
// import storage              from "redux-persist/lib/storage";
import storage              from "@react-native-community/async-storage";
import autoMergeLevel2      from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk                from "redux-thunk";
import reducers             from "./index";

const persistConfig = {
    storage: storage,
    key: "wallet-app",
    whitelist: ["user"],
    stateReconciler: autoMergeLevel2
}

const _persistReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    _persistReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
