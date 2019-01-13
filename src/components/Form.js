import React, { Component } from "react";
import Data from "./Data";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      product_name: "",
      description: "",
      price: "",
      availability: false,
      data: []
    };
  }
  handleChange = e => {
    if (e.target.name !== "availability") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({ [e.target.name]: e.target.checked });
    }

    console.log(e.target.name);
  };

  /**
   * 
   * handleChange = event => name => {
   *  if (name )
   * }
   */
  handleSubmit = e => {
    //  e.preventDefault();
    //  console.log(e.target);
    //  const newData ={
    //      product_name:e.target.product_name,
    //      description:e.target.description,
    //      price:e.target.price,
    //      availability:e.target.availability
    //  }
    //  this.state.data.unshift(newData)
    //  console.log(newData)
    //  console.log(this.state.data)
    e.preventDefault();
    const { availability, description, price, product_name } = this.state;
    const newData = {
      availability,
      description,
      price,
      product_name
    };
    this.setState({ data: [...this.state.data, newData] });
  };
  render() {
    return (
      <div className="row container ">
        <div className=" col-sm-4 form-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="product_name"
                type="text"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.product_name}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-check">
              <input
                name="availability"
                type="checkbox"
                onChange={this.handleChange}
                checked={this.state.availability}
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Available</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Button
            </button>
          </form>
        </div>
        {/* <div>{JSON.stringify(this.state.data)}</div> */}
        <div className="col-sm-6"> <Data data ={this.state.data}/></div>

      </div>
    );
  }
}

export default Form;
