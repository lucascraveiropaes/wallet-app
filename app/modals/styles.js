import { Dimensions }   from "react-native";
import styled           from "styled-components/native";
import _Button          from "../components/Button";

const { height, width } = Dimensions.get("window");

export const ModalContainer = styled.View`
    background-color: #FFF;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 20px;
    elevation: 10;
    maxHeight: ${height/2};
`

export const ModalTitle = styled.Text`
    font-size: 24;
    color: #000;
    text-align: center;
    margin-bottom: 25;
`

export const Button = styled(_Button)`
    width: 100%;
    margin-bottom: 0;
`

export const ErrorMessage = styled.Text`
    font-size: 14px;
    color: red;
`

// -------------------------- transparent
export const MenuOption = styled(_Button)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0;
    elevation: 0;
    width: 100%;
    margin: 0;
    height: 70px;
    padding: 0px;
`

export const OptionText = styled.Text`
    font-size: 14px;
    margin-left: 20px;
`

export const Divider = styled.View`
    height: 0.2px;
    background: rgba(0,0,0,0.4);
    width: 100%;
`

// ----------------

export const PictureContainer = styled.TouchableOpacity``

const pictureSize = width*0.4;
export const Picture = styled.Image`
    width: ${pictureSize};
    height: ${pictureSize};
    border-radius: ${pictureSize};
    margin-bottom: 8px;
`
