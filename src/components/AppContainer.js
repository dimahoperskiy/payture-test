import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {addOrder} from "../redux/main";

const mapStateToProps = (state) => {
    return ({
        orders: state.main.orders
    })
}

const mapDispatchToProps = {
    addOrder
}

const AppContainer = (props) => {
    return (
        <App orders={props.orders} addOrder={props.addOrder}/>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

