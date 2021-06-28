import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import style from "./DialogAdd.module.css"
import Preloader from "../Preloader/Preloader";


const DialogAdd = (props) => {
    const [img, setImg] = useState()
    const [price, setPrice] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {onClose, open} = props

    const getRandomPrice = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    useEffect(() => {
        let r = Math.random().toString(36).substring(7);
        setImg(`https://picsum.photos/seed/${r}/200`)
        setPrice(getRandomPrice(500, 10000))
    }, [open])


    const handleClose = () => {
        onClose();
        setIsLoading(true)
    }

    let nextImg = () => {
        let r = Math.random().toString(36).substring(7);
        setIsLoading(true)
        setImg(`https://picsum.photos/seed/${r}/200`)
        setPrice(getRandomPrice(500, 10000))
    }

    let order = () => {
        handleClose()
        props.addOrder({
            number: props.length+1,
            date: new Date(),
            price,
            card: "6****4",
            img
        })
    }

    return (

        <Dialog onClose={handleClose} open={open}>
            <div className={style.wrapper}>
                <h1>Choose an image to order</h1>
                <img src={img}
                     onLoad={() => setIsLoading(false)}
                     className={isLoading? style.loading : style.img}
                     alt=""/>
                {isLoading && <Preloader/>}
                <p>Price: <b>{price}₽</b></p>
                <span className={style.next} onClick={nextImg}>Next ⏭️</span>
                <span className={style.btn} onClick={order}>Order</span>
            </div>
        </Dialog>


    );
};

export default DialogAdd;