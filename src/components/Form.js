import React, { Component } from 'react'
import Data from './Data'
 class Form extends Component {
     constructor(){
         super();
         this.state={
             product_name:'',
             description:'',
             price:'',
             availability:'',
             data:["a"]
             
         }
     }
     handleChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
           
        })
     }
     handleSubmit =(e)=>{
         e.preventDefault();
         const newData ={
             product_name:this.state.product_name,
             description:this.state.description,
             price:this.state.price,
             availability:this.state.availability
         }
         this.state.data.unshift(newData)
         console.log(newData)
         console.log(this.state.data)
     }
  render() {
    return (
        <div className= "row">
      <div className=" col-sm-6">

          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input name="product_name" type="text" className="form-control" onChange={this.handleChange} value={this.state.product_name} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" type="text" value={this.state.description} onChange={this.handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input name="price" type="number" value={this.state.price} onChange={this.handleChange} className="form-control" />
              </div>
              
              <div className="form-check">
                <input  name="availability"type="checkbox" value={this.state.availability} className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Available</label>
                </div>
              <button type="submit" className="btn btn-primary">Button</button>
          </form>
         
         </div>
         <div className="col-sm-6"> <Data data ={this.state.data}/>
      </div>
      </div>
    )
  }
}


export default Form;
