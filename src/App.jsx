import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "./Context/AppContext.jsx";

import Navigate from "./Components/Navigate";
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import Deals from "./Components/Deals";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Signout from "./Components/Signout.jsx"
import Cart from "./Components/Cart";
import Goldedition from "./Components/Goldedition";
import Boxmeals from "./Components/Boxmeals";
import Varietybuckets from "./Components/Varietybuckets";
import Veg from "./Components/Veg";
import Chickenbuckets from "./Components/Chickenbuckets";
import Burgers from "./Components/Burgers";
import Snacks from "./Components/Snacks";
import Ricebowls from "./Components/Ricebowls";
import Footer from "./Components/Footer";
import Orderoptions from "./Components/Orderoptions.jsx";
import Delivery from "./Components/Delivery.jsx";
import Dinein from "./Components/Dinein.jsx";
import Pickup from "./Components/Pickup.jsx";
import Viewdetails1 from "./Components/Viewdetails1.jsx";
import Viewdetails2 from "./Components/Viewdetails2.jsx";
import Viewdetails3 from "./Components/Viewdetails3.jsx";
import Viewdetails4 from "./Components/Viewdetails4.jsx";
import Viewdetails5 from "./Components/Viewdetails5.jsx";
import Viewdetails6 from "./Components/Viewdetails6.jsx";
import Viewdetails7 from "./Components/Viewdetails7.jsx";
import Viewdetails8 from "./Components/Viewdetails8.jsx";
import Payment from "./Components/Payment.jsx";
import Orders from "./Components/Orders.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx"

function App() {
  
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const addToCart = (product) => {
    const itemWithQty = { ...product, quantity: 1 }; 
    setCartItems([...cartItems, itemWithQty]);
    navigate("/cart");
  };

  const plusQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minusQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClose = () => navigate(-1);
  const handleBack = () => navigate(-1);

  const addOrder = (item, total) => {
    const newOrder = {
      item: item,
      total: total,
      date: new Date().toLocaleString(),
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,

        cartItems,
        setCartItems,

        isLoggedIn,
        setIsLoggedIn,

        addToCart,
        plusQty,
        minusQty,
        removeCart,

        orders,
        setOrders,
        addOrder,

        handleClose,
        handleBack,
      }}
    >
      <div className="kfc-container">
        <Navigate />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/goldedition" element={<Goldedition />} />
          <Route path="/boxmeals" element={<Boxmeals />} />
          <Route path="/varietybuckets" element={<Varietybuckets />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/chickenbuckets" element={<Chickenbuckets />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/ricebowls" element={<Ricebowls />} />
          <Route path="/orderoptions" element={<Orderoptions />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/dinein" element={<Dinein />} />
          <Route path="/pickup" element={<Pickup />} />

          <Route path="/viewdetails1" element={<Viewdetails1 />} />
          <Route path="/viewdetails2" element={<Viewdetails2 />} />
          <Route path="/viewdetails3" element={<Viewdetails3 />} />
          <Route path="/viewdetails4" element={<Viewdetails4 />} />
          <Route path="/viewdetails5" element={<Viewdetails5 />} />
          <Route path="/viewdetails6" element={<Viewdetails6 />} />
          <Route path="/viewdetails7" element={<Viewdetails7 />} />
          <Route path="/viewdetails8" element={<Viewdetails8 />} />

          <Route path="/payment" element={<Payment />} />
          
          <Route path="/orders" element={
            <PrivateRoute>
               <Orders />
            </PrivateRoute>
          } />

        </Routes>

        <Footer />
      </div>
      
    </AppContext.Provider>
  );
}

export default App;