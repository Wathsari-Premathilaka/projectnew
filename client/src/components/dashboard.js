import React,{Component} from 'react';
import axios from 'axios';



export default class Dashboard extends Component{
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
        <div className="admin-back">
               <div className="tablefont">
               <h1 className="homefont2">Admin Panel</h1>
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
                                        <td>
                                            <a className="btn btn-warning" href={`/updateitem/${items._id}`}>
                                                <i class="fas fa-edit"></i>&nbsp;Edit
                                            </a>
                                            &nbsp;
                                            <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(items._id)}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                </table>
                                </div>
                              
                                <a className="btn btn-danger" href="/additem">
                                                <i className="far fa-trash-alt"></i>&nbsp;Add Item
                                            </a>
                   

                </div>

        
        


    )
}
}
