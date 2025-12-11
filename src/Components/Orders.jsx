import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../Styles/Orders.css";

function Orders() {
  const { orders } = useContext(AppContext);

  return (
    <div className="orders-container">
      {orders.length === 0 ? (
        <p>No Orders</p>
      ) : (
        orders.map((ord, index) => (
          <div key={index} className="order-box">
            <img src={ord.item.image} alt={ord.item.name} />
            <div className="item-info">
              <h3>{ord.item.name}</h3>
              <p>Price: {ord.item.price}</p>
              <p className="order-date">Order Date: {ord.date}</p>
              <p className="order-total">Total: {ord.total}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
