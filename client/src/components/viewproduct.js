import React,{Component} from 'react';
import axios from 'axios';
import Navbar2 from './navbar2';


export default class ViewProduct extends Component{


    constructor(props){
        super(props);
        this.state={
            items:[]
        };
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
    
    onAdd = () =>{
       
        
        const data={
            name:this.state.name,
            price:this.state.price,
            amount:this.state.amount
        }

       

            axios.post(`http://localhost:1700/addcart`,data).then((res)=>{
                if(res.data.success){
                    alert("success")}
                    else{alert("Fail")}
               
            })
        }
   


    
    

    render(){
        return(
            <div className="product-back">       
            <Navbar2/>  
                <h1 align="center">Product Details</h1>
                
                    <div className="login-box2">
                        <label>Name:{this.state.name}</label><br/>  <br/>
                        <label>Price:{this.state.price}</label><br/>  <br/>
                        <label>Available Amount:{this.state.amount}</label><br/>  <br/>  <br/>  <br/>
                       
                             
                  

                   
              
                <a className="btn btn-danger" href="#" onClick={()=>this.onAdd()}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Add To Cart</a>&nbsp;&nbsp;&nbsp;
                                              
                                                
                 <a className="btn btn-warning" href="/mycart">
                                                <i className="far fa-trash-alt"></i>&nbsp;View My Cart</a>
                                                
              
                    </div>
                    </div>
            
            
    
    
        )
    }
    }
    