import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//import Login from './pages/Login'
//import Register from  './pages/Register'
import Dashboard from  './components/dashboard'
import AddItem from  './components/additem'
import DeleteItem from  './components/deleteitems'
import GetItem from  './components/getitems'
import UpdateItem from  './components/updateitems'
import Home from  './components/home'
import Login from  './components/login'
import Register from  './components/register'
import UserInterface from  './components/userinterface'
import ViewProduct from  './components/viewproduct'
import MyCart from  './components/mycart'
import Order from  './components/order.js'
import OrderDetails from './components/orderdetails'

const App = () =>{
    return <div>
        <BrowserRouter>
            <Route path='/' exact component = {Home} />
            <Route path='/userinterface' exact component = {UserInterface} />
            <Route path='/login' exact component = {Login} />
            <Route path='/register' exact component = {Register} />
            <Route path='/dashboard' exact component = {Dashboard} />
            <Route path='/additem' exact component = {AddItem} />
            <Route path='/deleteitem/:id' exact component = {DeleteItem} />
            <Route path='/getitem/:id' exact component = {GetItem} />
            <Route path='/updateitem/:id' exact component = {UpdateItem} />
            <Route path='/viewproduct/:id' exact component = {ViewProduct} />
            <Route path='/mycart' exact component = {MyCart} />
            <Route path='/order' exact component = {Order} />
            <Route path='/orderdetails' exact component = {OrderDetails} />






        </BrowserRouter>
    </div>
}

export default App