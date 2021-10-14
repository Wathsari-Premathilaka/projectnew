import React,{Component} from 'react';
import axios from 'axios';
import Navbar2 from './navbar2';

export default class Order extends Component{

    constructor(props){
        super(props);
		this.state={
			name:"",
            email:"",
            address:"",
			telephone:""
			}
        }
        
    
        componentDidMount(){
            this.getItems();
        }
        
        
        getItems(){
            axios.get("http://localhost:1700/getorder").then(res =>{
                if(res.data.success){
                    this.setState({
                        items:res.data.exixtingorder
                    });
        
                console.log(this.state.items)
                }
            });
        
        }
        
        
        

    handleInputChange=(e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const {name,email,address,telephone}=this.state;
        const data={
            name:name,
            email:email,
            address:address,
			telephone:telephone

        }

        console.log(data)

        axios.post("http://localhost:1700/order",data).then((res)=>{
            if(res.data.success){
               
                alert("ordered Successfully");
                window.location.href = '/orderdetails'
                

                
            }
        })
    }

	render(){
		return(
            <div className="order-back">
                <Navbar2/>
            <div className="login-box2">         
                <h1 align="center">Order Details</h1>
                <form>
                    <div>
                        <label align="left">Name  </label>
                        <input type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleInputChange}/>
                            
                    </div><br/>

                    <div>
                        <label>Email</label>
                        <input type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}/>
                            
                    </div><br/>


                    <div>
                        <label>Address</label>
                        <input type="text"
                                name="address"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.handleInputChange}/>
                            
                    </div><br/>

                    <div>
                        <label>Telephone Number</label>
                        <input type="text"
                                name="telephone"
                                placeholder="Enter Telephone Number"
                                value={this.state.telephone}
                                onChange={this.handleInputChange}/>
                            
                    </div><br/>

                  
                </form>
                <a align="center" onClick={this.onSubmit} href='/orderdetails'  className="btn btn-danger">Confirm Order</a>
              
                    </div>
    
                    </div>
            
    
    
        )}


		}