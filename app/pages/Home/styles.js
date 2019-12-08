import { Dimensions }  from "react-native";
import styled          from "styled-components/native";
import { Button }      from "../../components";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
    background-color: #FFF;
    display: flex;
    flex: 1;
`

export const BalanceCard = styled.View`
    background-color: #FFF;
    display: flex;
    flex: 1;
    elevation: 6;
    border-radius: 6px;
    position: absolute;
    top: 230px;
    left: 30px;
    right: 30px;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export const BalanceText = styled.Text`
    font-size: 18px;
    color: #000;
    opacity: 0.7;
    margin-bottom: 4px;
`

export const Balance = styled.Text`
    font-size: 27px;
    color: #000;
    opacity: 0.8;
`

export const Header = styled.View`
    background-color: transparent;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    height: 280px;
`

const pictureSize = width*0.35;
export const Picture = styled.Image`
    width: ${pictureSize};
    height: ${pictureSize};
    border-radius: ${pictureSize};
    border-width: 3px;
    border-color: #FFF;
    margin-top: -20px;
`

export const MenuButton = styled(Button)`
    background-color: transparent;
    elevation: 0;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    left: 5px;
`

// ---------------------

export const Divider = styled.View`
    height: 0.5;
    background: rgba(0,0,0,0.2);
    margin: 0px 20px;
`
export const THeader = styled.View`
    height: 50px;
`

export const TContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: auto;
    border-radius: 0px;
    elevation: 0px;
    margin: 0px;
`
export const TRow = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const TRight = styled.View`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
export const TAmount = styled.Text`
    font-size: 18px;
    opacity: 0.85;
    margin-bottom: 6px;
`
export const TType = styled.Text`
    font-size: 16px;
    opacity: 0.85;
`
export const TLeft = styled.View`
    display: flex;
    align-items: flex-end;
`
export const TDate = styled.Text`
    font-size: 14px;
    opacity: 0.8;
`

export const TDescription = styled.Text`
    font-size: 15px;
    opacity: 0.7;
    margin-top: 10px;
    width: 100%;
    text-align: left;
`

export const TOverlay = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 20px;
    background: rgba(0,0,0,0.1);
`
export const TRedLine = styled.View`
    width: 100%;
    height: 2px;
    background: red;
`
// --------------------------------
export const EmptyContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height*0.4};
    padding: 30px;

`
export const EmptyText = styled.Text`
    font-size: 20px;
    line-height: 30px;
    opacity: 0.6;
    text-align: center;
`
