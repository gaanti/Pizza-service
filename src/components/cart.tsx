import React from 'react';
import CartItem from "./cart-item";

function Cart() {
    return (
        <>
            <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <img src="cart.svg"/>Cart
                            </h2>
                            <div className="cart__clear">
                                <img src="trash.svg"/>
                                <span>Clear the cart</span>
                            </div>
                        </div>
                        <div>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Total pizzas: <b>3 шт.</b> </span>
                                <span> Order cost: <b>$900</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <a href="/Users/juliagaskevich/webstormprojects/untitled3/public"
                                   className="button button--outline button--add go-back-btn">
                                    <img src="grey-arrow-left.svg"/>
                                    <span>Back to homepage</span>
                                </a>
                                <div className="button pay-btn">
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart;
