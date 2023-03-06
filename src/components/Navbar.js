import React from 'react';
import logo from './images/logo.svg';
import menuicon from './images/icon-menu.svg';
import closeicon from './images/icon-close-menu.svg';
import {
    Closeicon,
    Hstack,
    Logo,
    Menuicon,
    Menulist,
    Arrowdown,
    Overlayscreen,
} from './styled/Introdropdown.styled';
import { Stylednavbar } from './styled/Introdropdown.styled';
import { Featurelist } from './Featurelist';
import { Companylist } from './Companylist';

export const Navbar = () => {

    const [showFeature, setShowfeature] = React.useState(false);
    const featureHandler = () => {
        setShowfeature(!showFeature)
    };
    const [showCompany, setShowcompany] = React.useState(false);
    const companyHandler = () => {
        setShowcompany(!showCompany)
    };
    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Stylednavbar>
        <Hstack>
            <Logo src={logo} alt='logo' />
            <ul>
                <li>
                <Hstack onClick={()=>featureHandler()}>
                    Feature
                    {showFeature?
                    (<Arrowdown className={`${showFeature && "rotate"}`}/>)
                    : (<Arrowdown className={`${!showFeature && "default"}`} />)}
                </Hstack>
                </li>
                {showFeature?(<Featurelist/>) : null}
                <li>
                <Hstack onClick={()=>companyHandler()}>
                    Company
                    {showCompany?
                    (<Arrowdown className={`${showCompany && "rotate"}`}/>)
                    : (<Arrowdown className={`${!showCompany && "default"}`} />)}
                </Hstack>
                </li>
                {showCompany?(<Companylist/>) : null}
                <li>Careers</li>
                <li>About</li>
            </ul>
        </Hstack>
        <>
            <ul>
                <li id='log'>Login</li>
                <li id='reg'>Register</li>
            </ul>
        </>
      <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
      {toggleMenu && (
        <>
          <Overlayscreen/>
          <Menulist>
            <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
                <ul>
                    <li>
                        <Hstack onClick={()=>featureHandler()}>
                            Feature
                            {showFeature?
                            (<Arrowdown className={`${showFeature && "rotate"}`}/>)
                            : (<Arrowdown className={`${!showFeature && "default"}`} />)}
                        </Hstack>
                    </li>
                    {showFeature?(<Featurelist/>) : null}
                    <li>
                        <Hstack onClick={()=>companyHandler()}>
                            Company
                            {showCompany?
                            (<Arrowdown className={`${showCompany && "rotate"}`}/>)
                            : (<Arrowdown className={`${!showCompany && "default"}`} />)}
                        </Hstack>
                    </li>
                    {showCompany?(<Companylist/>) : null}
                    <li>Careers</li>
                    <li>About</li>
                </ul>
                <ul id='logreg'>
                    <li id='log'>Login</li>
                    <li id='reg'>Register</li>
                </ul>
          </Menulist>
        </>
      )}
    </Stylednavbar>
  )
}