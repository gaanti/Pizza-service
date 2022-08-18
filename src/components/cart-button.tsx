import React from 'react';
import {Link} from "react-router-dom";

function CartButton() {
    return (
        <div className="header__cart">
            <Link to="cart" className="button button--cart">
                <span>$520</span>
                <div className="button__delimiter"></div>
                <img
                    src="cart.svg"
                    width="18"
                    height="18"
                >
                </img>
                <span>3</span>
            </Link>
        </div>
    );
}

export default CartButton;