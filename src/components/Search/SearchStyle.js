// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle';
import * as Variable from '../../styles/VariableStyle';

// Global Styles
import * as Global from '../../styles/GlobalStyle';


export const AppWrapper = styled(Global.AppWrapper)`
    margin: 4% auto;
`

export const Form = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-content: space-between;
    justify-content: space-between;

    @media ${deviceMax.tablet} {
        flex-direction: column;
    }
`

export const Input = styled.input`
    width: 90%;
    height: 50px;
    outline: none;
    border: none;
    box-shadow: 0 5px 20px -8px ${Variable.gray};
    border-radius: 5px;
    padding-left: 10px;
    top: calc(50% - 20px);
    left: calc(50% - 200px);
    transition-duration: .6s;
    font-family: ${Variable.sourceSans};
    font-size: 16px;

    @media ${deviceMax.tablet} {
        margin: 20px auto;
    }
`

export const ButtonWrapper = styled.button`
    position: relative;
    color: ${Variable.white};
    font-family: ${Variable.sourceSans};
    font-size: 18px;
    font-weight: 700;
    width: 150px;
    text-transform: uppercase;
    padding: 15px 40px;
    margin-left: 15px;
    border-radius: 5px;
    background: ${Variable.darkGray};
    overflow: hidden;
    cursor: pointer;
    border: none;
    outline: none;
    &:before {
        position: absolute;
        content: "↑";
        left: 48%;
        top: -100%;
        font-weight: 700;
        font-size: 20px;
        transition: all .4s;
    }
    &:hover span {
        transform: translateY(300%);
    }
    &:hover:before {
        top: 30%;
    }

    @media ${deviceMax.tablet} {
        margin: 0 auto;
    }
`

export const Button = styled.span`
    display: inline-block;
    transition: all 0.5s;
`
