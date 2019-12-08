import styled   from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom-width: 0.2px;
    border-bottom-color: rgba(0,0,0,0.5);
`

export const Text = styled.Text`
    font-size: 12px;
    color: #000;
    opacity: 0.7;
    margin-bottom: -5px;
`

export const Picker = styled.Picker`
    width: 100%;
    margin-left: -5px;
    margin-bottom: -5px;
`
