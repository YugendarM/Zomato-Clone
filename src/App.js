import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

//SLIDER
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeLayoutHOC from './HOC/Home.hoc';
import Temp from './Components/temp.component';
import Tab from './Components/Tab';
import Home from './Components/Home';
import Lander from './Components/Lander Page';
import Restaurant from './Components/Pages/Restaurant';
import RestaurantLayoutHOC from './HOC/Restaurant.hoc';
import CheckoutLayoutHOC from './HOC/Checkout.hoc';
import Checkout from './Components/Pages/Checkout';

function App() {

  const navigate = useNavigate();
  return (
    <>
      <HomeLayoutHOC path="/" exact Component={Lander}/>
      <HomeLayoutHOC path="/:type" exact Component={Home}/>

      <RestaurantLayoutHOC path="/restaurant/:id" exact Component={Restaurant}/>
      <RestaurantLayoutHOC path="/restaurant/:id/:route" exact Component={Restaurant}/>

      <CheckoutLayoutHOC path="/checkout/order" exact Component={Checkout}/>
      
    </>
  );
}

export default App;
