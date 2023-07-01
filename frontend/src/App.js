import './App.css';
import Home from "../src/component/Home/Home";
import WebFont from "webfontloader";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from '../src/component/Products/ProductDetails';
import LoginSignup from "../src/component/Authentication/LoginSignup";
import UserData from '../src/more/UserData';
import { useSelector } from 'react-redux';
import { loadUser } from '../src/actions/userAction';
import Store from "../src/store";
import ProtectedRoute from '../src/route/ProtectedRoute';
import Profile from "../src/component/user/Profile";
import UpdatePassword from '../src/component/user/UpdatePassword';
import EditProfile from '../src/component/user/EditProfile';
import About from './component/about/About';
import Products from "../src/component/Products/Products";
import Search from "../src/component/Products/Search";
import Support from "../src/more/Support";
import Cart from '../src/component/cart/Cart';
import Favourites from '../src/component/cart/Favourites';
import Shipping from '../src/component/cart/Shipping';
import ConfirmOrder from '../src/component/cart/ConfirmOrder';
import axios from 'axios';
import { useState } from 'react';
import Payment from '../src/component/cart/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Success from '../src/component/cart/Success';
import MyOrder from "../src/component/user/MyOrder";
import MyOrderDetails from "../src/component/user/MyOrderDetails";
// import CommingSoon from "./more/CommingSoon";
import Rules from "../src/more/Rules";
import Contact from "../src/more/Contact";
import MoreOption from "../src/component/user/MoreOption"
import Dashboard from '../src/component/Admin/Dashboard';
import CreateProduct from '../src/component/Admin/CreateProduct';
import AllProducts from "../src/component/Admin/AllProducts";
import EditProduct from "../src/component/Admin/EditProduct";
import AllOrder from "../src/component/Admin/AllOrder";
import UpdateOrder from "../src/component/Admin/UpdateOrder";
import AllUsers from "../src/component/Admin/AllUsers";
import UpdateUser from "../src/component/Admin/UpdateUser";
import AllReviews from "../src/component/Admin/AllReviews";
import ForgotPassword from "../src/component/user/ForgotPassword";
import ResetPassword from "../src/component/user/ResetPassword";
import Notfound from "../src/more/Notfound";

function App() {

  const {isAuthenticated,user} = useSelector((state) =>state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    
    Store.dispatch(loadUser());
    
    getStripeApiKey();

  }, []);
  return (
     
     <Router>
      {isAuthenticated && <UserData user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/product/:id" component={ProductDetails} />
         <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/about" component={About} /> 
         <Route exact path="/products" component={Products} />
         <Route exact path="/search" component={Search} />
         <Route exact path="/products/:keyword" component={Products} />
         <Route exact path="/support" component={Support} />
         <Route exact path="/cart" component={Cart} />
         <Route exact path="/favourites" component={Favourites} />
         {/* <Route exact path="/creator" component={CommingSoon} /> */}
         <Route exact path="/faq" component={Rules} />
         <Route exact path="/contact" component={Contact} />
          <Route exact path="/more" component={MoreOption} /> 
         <Route exact path="/password/forgot" component={ForgotPassword} />
         <Route exact path="/password/reset/:token" component={ResetPassword} />
         <ProtectedRoute exact path="/shipping" component={Shipping} />
         <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
         <ProtectedRoute exact path="/me" component={Profile} />
         <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
         <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
         <ProtectedRoute exact path="/success" component={Success} />
         <ProtectedRoute exact path="/orders" component={MyOrder} />
         <ProtectedRoute exact path="/order/:id" component={MyOrderDetails} />
         <ProtectedRoute isAdmin={true} exact path="/dashboard" component={Dashboard} />
         <ProtectedRoute isAdmin={true} exact path="/admin/product" component={CreateProduct} />
         <ProtectedRoute isAdmin={true} exact path="/admin/products" component={AllProducts} />
         <ProtectedRoute isAdmin={true} exact path="/edit/product/:id" component={EditProduct} />
         <ProtectedRoute isAdmin={true} exact path="/admin/orders" component={AllOrder} />
         <ProtectedRoute isAdmin={true} exact path="/admin/order/:id" component={UpdateOrder} />
         <ProtectedRoute isAdmin={true} exact path="/admin/users" component={AllUsers} />
         <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
         <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={AllReviews} />

         <Route component={
           window.location.pathname === "/process/payment" ? null : Notfound
           } />
       </Switch>
     </Router>

  );
}

export default App;
