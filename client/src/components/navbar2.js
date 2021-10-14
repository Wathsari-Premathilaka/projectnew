import React,{Component} from "react";
import '../App.css';

export default class Navbar2 extends Component{

    render(){
        return(
            <div>
                <ul className="ul">
                    <li className="li"><a className="a" href="/userinterface">Home</a></li>
                    <li className="li"><a className="a" href="/">Log Out</a></li>

                </ul>
            </div>
        )
    }

}  