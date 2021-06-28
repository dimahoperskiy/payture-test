import React, {useState} from "react";
import style from './App.module.css';
import Order from "./Order/Order";
import DialogAdd from "./DialogAdd/DialogAdd";

const App = (props) => {
    let [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let ordersSorted = props.orders.sort((a, b) => {
        if (a.number < b.number) return 1
        else return -1
    })

    let orders = ordersSorted.map(el => {
        return (
            <>
                <hr/>
                <Order {...el} key={el.number}/>
            </>
        )
    })

    return (
        <div className={style.app}>
            <div className={style.orders}>
                <span className={style.btn} onClick={handleClickOpen}>New order</span>
                <h1>My orders</h1>
                <div className={style.card}>
                    {orders}
                </div>
            </div>
            <DialogAdd open={open} onClose={handleClose} addOrder={props.addOrder} length={props.orders.length}/>
        </div>
    );
}

export default App;
