import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order(s):</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <Link to='/'>
            <h4 className='order_backHome'> Back </h4> 
            </Link>
        </div>
    )
}

export default Order