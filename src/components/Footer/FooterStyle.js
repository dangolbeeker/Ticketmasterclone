// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle';
import * as Variable from '../../styles/VariableStyle';

// Global Style
import * as Global from '../../styles/GlobalStyle';


export const AppWrapper = styled(Global.AppWrapper)`
    margin: 4% auto 0;
    background-color: ${Variable.hoverGray};
`

export const InfoWrapper = styled.div`
    display: block;
    padding: 25px 5px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        padding: 10px 5px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        padding: 15px 5px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        padding: 20px 5px;
    }
    `

    export const InfoSource = styled.div`
    position: absolute;
    right: 0;
    top: 27px;
    padding-right: 20px;
    img {
        width: 30px;

        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            width: 20px;
        }

        @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
            width: 25px;
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        top: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        top: 14px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        top: 18px;
    }
    `

    export const Name = styled.span`
    a {
        color: ${Variable.gray};
    }
`
export const LinkWrapper = styled.span`

`

export const Link = styled.a.attrs({
    className: "footerInfo",
  })`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    img {
        float: right;
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 12px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        font-size: 16px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        font-size: 18px;
    }
`
