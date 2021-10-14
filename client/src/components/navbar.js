import React,{Component} from "react";
import '../App.css';

export default class Navbar extends Component{

    render(){
        return(
            <div>
                <ul className="ul">
                    <li className="li"><a className="a" href="/login">Sign In</a></li>
                    <li className="li"><a className="a" href="/register">Sign Up</a></li>

                </ul>
            </div>
        )
    }

}  