// Packages
import styled from 'styled-components';

// Styles
import { deviceMin, deviceMax } from '../../styles/DeviceStyle';
import * as Variable from '../../styles/VariableStyle';

// Global Style
import * as Global from '../../styles/GlobalStyle';


export const AppWrapper = styled(Global.AppWrapper)`
    background: linear-gradient(245deg,${Variable.lightBlue},${Variable.secondaryColor});
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    & h1, span, p, h3 {
        color : ${Variable.white};
    }
    p, span {
        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 14px;
        }
    }
`

export const AppWrapperInline = styled.div`
    padding: 20px;
`

export const Name = styled.h1`
    color: ${Variable.white};

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 18px;
        margin-top: 15%;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        margin-top: 18%;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        margin-top: 15%;
    }
`

export const NameDetail = styled.h3`
    display: inline-block;
    font-weight: 700;
    color: ${Variable.white};
    background: ${Variable.lightBlue};
    padding: 5px 10px;
    border-radius: 5px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 14px;
    }
`

export const Span = styled.span.attrs(props => ({
    className: "info",
  }))`
    display: block;
    margin-top: 15px;
    font-size: 22px;
    font-weight: 700;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        font-size: 14px;
    }
`

export const Home = styled.span`
    position: absolute;
    top: 2%;
    right: 10%;
    background: ${Variable.darkGray};
    color: ${Variable.white};
    padding: 15px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: transform .4s;
    font-family: ${Variable.sourceSans};
    font-weight: 700;
    &:hover {
        transform: scale(1.1);
    }
    & span {
        @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
            font-size: 12px;
        }
    }

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        top: 3%;
        right: 12%;
        padding: 10px 5px;
    }
`

export const Zone = styled.span`
  background: ${Variable.green};
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
`

export const Thumb = styled.img`
    position: absolute;
    width: 250px;
    right: 10px;
    bottom: 10px;

    @media screen and ${deviceMin.mobileS} and ${deviceMax.mobileL} {
        width: 50px;
    }

    @media screen and ${deviceMin.mobileL} and ${deviceMax.tablet} {
        width: 150px;
    }

    @media screen and ${deviceMin.tablet} and ${deviceMax.laptop} {
        width: 200px;
    }
`
