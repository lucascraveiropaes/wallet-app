import React            from "react";
import { Alert }        from "react-native";
import { Actions }      from "react-native-router-flux";
import { showMessage }  from "react-native-flash-message";
import ImagePicker      from "react-native-image-picker";

export function openPicker(callback) {
    ImagePicker.showImagePicker({
        title: "Selecionar Foto de Perfil",
        takePhotoButtonTitle: "Tirar foto",
        chooseFromLibraryButtonTitle: "Selecionar da galeria",
        chooseWhichLibraryTitle: "Qual galeria?",
        cancelButtonTitle: "Cancelar",
        storageOptions: {
            skipBackup: true,
            path: "images",
        }
    }, res => {
        if (res.uri) callback(res.uri);
    });
}

export function numberWithCommas(x) {
    x = parseFloat(x).toFixed(2);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function notificationSuccess(description = "") {
    return showMessage({
        message: "Aviso",
        description: description,
        type: "success",
        autoHide: true,
        duration: 1000
    });
}

export function notificationError(description = "") {
    return showMessage({
        message: "Atenção",
        description: description,
        type: "danger",
    });
}

export function getTime(d = new Date(), addSecs = false) {
    if (!d)
        d = new Date();

    if (typeof d === "string")
        d = new Date(d);

    const hour = (d.getHours() < 10) ? "0"+d.getHours() : d.getHours();
    const mins = (d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes();
    let response = `${hour}:${mins}`;

    if (addSecs)
        response += (d.getSeconds() < 10) ? "0"+d.getSeconds() : d.getSeconds();

    return response;
}

export function getDate(d = new Date()) {
    if (!d)
        d = new Date();

    if (typeof d === "string")
        d = new Date(d);

    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const date = ("0" + d.getDate()).slice(-2);

    return `${date}/${month}/${year}`;
}

export function popWithRefresh() {
    Actions.pop();
    Actions.refresh({ updatePage: Math.random() });
}

export const isDebug = (typeof DedicatedWorkerGlobalScope) !== "undefined";
export function _setTimeout(callback, secs = 1700) {
    if (isDebug) {
        return callback();
    } else {
        return setTimeout(callback, secs);
    }
}

export function simpleAlert(text) {
    Alert.alert("Carteira Digital", text, [
        { text: "Fechar", onPress: () => null },
    ], { cancelable: true })
}

export function oneActionAlert(title, text, action = () => null, buttonActionText = "Sim", buttonCloseText = "Cancelar") {
    Alert.alert(title ? title : "Carteira Digital", text, [
        { text: buttonCloseText, onPress: () => null },
        { text: "",  onPress: () => null },
        { text: buttonActionText, onPress: () => action() },
    ], { cancelable: true })
}
