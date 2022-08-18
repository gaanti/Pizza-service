import React from 'react';
import CartButton from "./cart-button";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src="pizza-logo.svg" alt="Pizza logo"/>
                    <div>
                        <Link to="/"><h1> React Pizza </h1></Link>
                        <p>The tastiest pizza in the Universe</p>
                    </div>
                </div>
                <CartButton/>
            </div>
        </div>
    );
}

export default Header;