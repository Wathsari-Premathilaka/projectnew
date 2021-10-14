import React,{Component} from 'react';
import axios from 'axios';
import Navbar from './navbar';
import '../App.css';


export default class Home extends Component{
   
 




render(){
    return(
<div className="Background">
        <Navbar/>
            <h1 className="homefont">Stationary Master</h1>
            <h2 color="blue" align="center">A Place to buy all your stationary items!</h2>
            
      
        </div>
    )
}
}
