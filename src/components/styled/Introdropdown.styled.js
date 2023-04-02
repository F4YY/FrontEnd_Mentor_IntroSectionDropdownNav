import styled from "styled-components";
import heroimagedesktop from '../images/image-hero-desktop.png';
import heroimagemobile from '../images/image-hero-mobile.png';
import arrowdown from '../images/icon-arrow-down.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`
export const StyledIntrodropdownnav = styled.nav`
    display: grid;
    height: 120vh;
    grid-template-columns: 1fr .8fr;
    grid-template-rows: .4fr 3fr .25fr .25fr;
    grid-template-areas:
        'Navi Navi'
        'Hero Heroimg'
        'Client Heroimg'
        'Footer Footer';
    grid-gap: 0;
    @media screen and (max-width:1025px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: 10% 70% 10% 10%;
    }
    @media screen and (max-width:600px) {
        justify-content: center;
        min-height: 120vh;
        grid-template-columns: 1fr;
        grid-template-rows: .2fr 1fr .8fr .5fr .1fr;
        grid-template-areas:
            'Navi'
            'Heroimg'
            'Hero'
            'Client'
            'Footer';
    }
    @media screen and (max-width:376px) {
        min-height: 130vh;
        grid-template-rows: .3fr 1.5fr .5fr .5fr .2fr;
    }
`
//Styled for Navbar section:
export const Stylednavbar = styled(Hstack)`
    grid-area: Navi;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    ul{
    display:block;
    font-size: .82em;
    color:var(--Medium-Gray);
    list-style: none;
    @media screen and (max-width:1025px) {
        font-size: .7em;
        padding:0;
    }
    @media screen and (max-width:600px) {
        display: none;
    }
}
ul li{
    display: inline-block;
    cursor: pointer;
    margin-right: 30px;
    :hover{
        font-weight: var(--bold);
        color:var(--Almost-Black);
    }
}
li#log{
        margin-right: 30px;
    }
li#reg{
        padding: 12px 20px;
        border: .13em solid var(--Medium-Gray);
        border-radius: 12px;
        :hover{
            border: .15em solid var(--Almost-Black);
        }
        :active{
            color: var(--Medium-Gray);
            border: .15em solid var(--Medium-Gray);
        }
    }
`
export const Logo = styled.img`
    width: 85px;
    height: 28px;
    margin: 0 70px 0 2px;
    @media screen and (max-width:1025px) {
        margin: 0 15px 0 5px;
        width: 70px;
    }
    @media screen and (max-width:600px) {
        margin: 10px 0 0;
    }
`
export const Featarrow = styled(Hstack)`
   align-items: center;
`
export const Comparrow = styled(Hstack)`
   align-items: center;
`
export const Arrowdown = styled.div`
    width: 10px;
    height: 7px;
    color: var(--Medium-Gray);
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    margin-left: 8px;
    :hover{
        color: var(--Almost-Black);
        font-weight: var(--bold);
        cursor: pointer;
    }
`
export const Styledfeaturelist = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 10px;
    background-color: var(--Almost-White);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    position:absolute;
    top: 30px;
    left: 135px;
    @media screen and (max-width:1025px) {
        top: 30px;
        left: 40px;
    }
    @media screen and (max-width:600px) {
        position:initial;
        width: auto;
        box-shadow: initial;
        translate: 40px -10px;
    }
`
export const Styledcompanylist = styled.div`
    width: auto;
    height: auto;
    margin:10px 10px;
    border-radius: 10px;
    background-color: var(--Almost-White);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    position:absolute;
    top: 25px;
    left: 290px;
    @media screen and (max-width:1025px) {
        top: 20px;
        left: 180px;
    }
    @media screen and (max-width:600px) {
        position:initial;
        width: auto;
        box-shadow: initial;
        translate: 38px -10px;
    }
`
export const Wrapper = styled(Hstack)`
    justify-content:left;
    gap:15px;
    margin:15px 15px 5px;
    cursor: pointer;
    p {
        margin: 0 ;
        :hover{
            color:var(--Almost-Black);
            font-weight: var(--bold);
        }
        :active{
            color:var(--Medium-Gray);
            font-weight: var(--bold);
        }
    }
`
//Styled for Hero section:
export const Styledhero = styled(Vstack)`
    grid-area: Hero;
    padding: 40px;
    @media screen and (max-width:1025px) {
        padding: 0;
    }
    @media screen and (max-width:600px) {
        padding: 0;
        justify-content: center;
    }
`
export const StyledHeroimage = styled.div`
    grid-area: Heroimg;
    background-image: url(${heroimagedesktop});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position-x: 35%;
    background-position-y: 25px;
    @media screen and (max-width:1025px) {
        background-size: 100%;
    }
    @media screen and (max-width:600px) {
        background-image: url(${heroimagemobile});
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: auto;
        background-position-y: auto;
    }
`
export const Buttonlearn = styled.button`
    width: 160px;
    height: 58px;
    font-size: 1em;
    font-weight: var(--bold);
    color:var(--Almost-White);
    background-color: var(--Almost-Black);
    padding: 12px 20px;
    margin: 40px 0 0 50px;
    border-radius: 15px;
    cursor:pointer;
    :hover{
        color:var(--Almost-Black);
        background-color: var(--Almost-White);
        border: 2px solid var(--Almost-Black);
    }
    :active{
        color:var(--Almost-Black);
        background-color: var(--Almost-White);
        border: 2px solid var(--Almost-Black);
        scale: .95;
    }
    @media screen and (max-width:1025px) {
        width: 145px;
        height: 52px;
        margin: 10px 0 20px 30px;
    }
    @media screen and (max-width:600px) {
        width: 145px;
        height: 52px;
        margin:0 auto;
    }
`
//Styled for Client section:
export const Styledclient = styled.div`
    grid-area: Client;
    @media screen and (max-width:1025px) {
        padding:20px 0 0;
    }
    @media screen and (max-width:600px) {
        padding:40px 0 0;
    }
`
export const Client = styled.img`
    width: 110px;
    height: 20px;
`
export const Hstackclient = styled(Hstack)`
    justify-content: space-evenly;
    align-items:center;
    padding: 0 90px 0;
    @media screen and (max-width:600px) {
        padding:0;
    }
`
//Styled for Footer section:
export const FooterAttribution = styled.footer`
    grid-area: Footer;
    text-align: center;
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    width: 40px;
    height: 23px;
    display: none;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    animation: overlayslide .3s ease-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    height:100vh;
    opacity:.5;
    background:var(--Almost-Black);
    z-index:0;
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:0;
    right:0;
    width: 70%;
    animation: slidernav .5s ease-in;
    animation-direction: alternate;
    animation-iteration-count: 1;
    min-height: 100vh;
    transition: .5s ease-in-out;
    background:var(--Almost-White);
    overflow:hidden;
    z-index:1;
    @media screen and (max-width:600px) {
        ul{
            display:block;
            font-size: 1em;
            font-weight: var(--reguler);
            color:var(--Medium-Gray);
            margin-top: 90px;
        }
        ul li{
            display: list-item;
            margin: 0 0 30px 30px ;
        }
        ul#logreg{
            margin-top: 20px 30px;
        }
        li#log{
            font-size: .85em;
            text-align: center;
            margin-bottom: 20px;
        }
        li#reg{
            font-size: .85em;
            text-align: center;
            margin:0 30px;
        }
    }
`
export const Closeicon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top:20px;
    right:12px;
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`