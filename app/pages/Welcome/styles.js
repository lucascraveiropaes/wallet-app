import { Dimensions }  from "react-native";
import styled          from "styled-components/native";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
    background-color: rgba(0,0,0,0.05);
    display: flex;
    justify-content: center;
    flex: 1;
`

export const BottomContent = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
`

export const Slide = styled.View`
    padding: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 1;
`

export const Title = styled.Text`
    font-size: 26px;
    color: #3750B8;
    text-align: center;
    margin-bottom: 10px;
`

export const Text = styled.Text`
    font-size: 16px;
    color: #000;
    text-align: center;
`

const pictureSize = width-80;
export const Picture = styled.Image`
    width: ${pictureSize};
    height: ${pictureSize};
`
