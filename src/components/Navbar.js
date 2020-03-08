import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg"
import styled from "styled-components";
import {ButtonContainer} from "./button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCartPlus} />;

const NawWrapper = styled.nav`
    background: var(--maniBlue);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
`;

class Navbar extends Component {
    render() {
        return (
            <NawWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            {element}
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NawWrapper>
        );
    }
}



export default Navbar;