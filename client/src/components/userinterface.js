import React,{Component} from 'react';
import axios from 'axios';
import '../App.css';
import Navbar2 from './navbar2';



export default class UserInterface extends Component{


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
    axios.get("http://localhost:1700/getitems").then(res =>{
        if(res.data.success){
            this.setState({
                items:res.data.exixtingPosts
            });

        console.log(this.state.items)
        }
    });

}


onDelete = (id) =>{

    axios.delete(`http://localhost:1700/deleteitem/${id}`).then((res)=>{
        alert("Deleted Successfully");
        this.getItems();
    })
}

render(){
    return(
        <div className="interface-back">
            <Navbar2/>
                    <h1 className="homefont2">Our Stock!</h1>
                    
                    <div className="tablefont">
                        <table class="table">
                            <thead>
                                <tr>
                                
                                </tr>
                            </thead>
                            
                            <tbody>
                                {this.state.items.map((items,index)=>(
                                    <tr>
                                      
                                        <td bgcolor="yellow">{items.name}</td>
                                       
                                     
                                        <td>
                                        <a className="btn btn-warning" href={`/viewproduct/${items._id}`}>
                                                <i class="fas fa-edit"></i>&nbsp;View Product</a>
                                            
                                          
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <a className="btn btn-danger" href={`/mycart`}>
                                                <i class="fas fa-edit"></i>&nbsp;View Cart</a>
                                            
                               
                                
                   

                </div>

        
        

                                
    )}
}