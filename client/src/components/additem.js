import React,{Component} from 'react';
import axios from 'axios';



export default class AddItem extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            amount:""
        }
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
        const {name,price,amount}=this.state;
        const data={
            name:name,
            price:price,
            amount:amount
        }

        console.log(data)

        axios.post("http://localhost:1700/additem",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    name:"",
                    price:"",
                    amount:""
                })
                alert("Added Successfully");

                
            }
        })
    }

    render(){
        return(
            <div>         
                <h1>Add Item</h1>
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
                <button type="submit" onClick={this.onSubmit} href='/dashboard'>Add</button>
                    </div>
    
            
            
    
    
        )
    }
    }
    