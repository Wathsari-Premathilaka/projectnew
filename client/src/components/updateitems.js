import React,{Component} from 'react';
import axios from 'axios';
import Navbar2 from './navbar2';


export default class UpdateItem extends Component{


    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            amount:""
        }
    }
    
    
    componentDidMount(){

        const id = this.props.match.params.id;
        axios.get(`http://localhost:1700/getitem/${id}`).then((res)=>{
            if(res.data.success){
               
                this.setState({
                    name:res.data.item.name,
                    price:res.data.item.price,
                    amount:res.data.item.amount
                });

                console.log(this.state.item);
            }else{alert("error")}
        })
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
        const id = this.props.match.params.id;
        const {name,price,amount}=this.state;
        const data={
            name:name,
            price:price,
            amount:amount
        }

        console.log(data)

        axios.put(`http://localhost:1700/updateitem/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Item Updated Successfully!")
                this.setState(
                    {
                    name:"",
                    price:"",
                    amount:""
                    }
                )

                
            }
        })
    }

    render(){
        return(
            <div className="edit-back">   
                <Navbar2/>      
                <div className="login-box2">
                <h1>Update Item</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleInputChange}/>
                            
                    </div>

                    <div>
                        <label>Price</label>
                        <input type="text"
                                name="price"
                                placeholder="Enter Price"
                                value={this.state.price}
                                onChange={this.handleInputChange}/>
                            
                    </div>


                    <div>
                        <label>Amount</label>
                        <input type="text"
                                name="amount"
                                placeholder="Enter Amount"
                                value={this.state.amount}
                                onChange={this.handleInputChange}/>
                            
                    </div>

                  
                </form>
                <button type="submit" onClick={this.onSubmit}>Update</button>
                    </div>
                    </div>
    
            
            
    
    
        )
    }
    }
    