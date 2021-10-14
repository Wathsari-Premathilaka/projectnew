import React,{Component} from 'react';
import axios from 'axios';
import Navbar2 from './navbar2';


export default class OrderDetails extends Component{
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
    axios.get("http://localhost:1700/getorder").then(res =>{
        if(res.data.success){
            this.setState({
                items:res.data.exixtingorder
            });

        console.log(this.state.items)
        }
    });

}




render(){
    return(
        
        <div className="detail-back">
            <Navbar2/>
            <div className="login-box">
                                {this.state.items.map((items,index)=>(
                                  
                                        <p>Name:{items.name}<br/>Email:{items.email}<br/>Address:{items.address}<br/>Telephone:{items.telephone}<br/></p>
                                        
                                       
                                          
                                ))}

                                <h2>We will contact you soon!</h2>
                           </div>
                   

                </div>

        
        


    )
}
}
