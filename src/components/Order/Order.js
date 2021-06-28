import React from 'react';
import style from "./Order.module.css"

const Order = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.first}>
                <img src={props.img} alt=""/>
                <div>
                    <p>№{props.number}</p>
                    <p>{props.date.toLocaleDateString()}</p>
                </div>
            </div>
            <div className={style.priceInfo}>
                <p><b>{props.price}₽</b></p>
                <p className={style.card}>card: {props.card}</p>
            </div>

        </div>
    );
};

export default Order;