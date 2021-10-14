import React,{Component} from 'react';
import axios from 'axios';
import Navbar2 from './navbar2';


export default class MyCart extends Component{
    constructor(props){
        super(props);

        this.state={
            items:[]
        };
    }

    componentDidMount(){
        this.getItems();
    }


    getItems(){
        axios.get(`http://localhost:1700/getcart`).then(res =>{
            if(res.data.success){
                this.setState({
                    items:res.data.exixtingcartitems
                });
    
            console.log(this.state.items)
            }
        });
    
    }

    

render(){
    return(
        <div className="cart-back">
            <Navbar2/>
                    <h1 className="homefont2">My Cart</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                            
                            <tbody>
                                {this.state.items.map((items,index)=>(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{items.name}</td>
                                        <td>{items.price}</td>
                                        <td>{items.amount}</td>
                                        
                                        
                                    </tr>
                                ))}
                                </tbody>
                                </table>

                                <button align="center"><a href="/order">Buy</a></button>
                                
                   

                </div>

        
        


    )
}
    }
    