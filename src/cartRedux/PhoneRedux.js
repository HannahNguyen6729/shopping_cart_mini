import React, { Component } from "react";
import {connect} from 'react-redux';

class PhoneRedux extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card bg-light">
        <img
          className="mt-3"
          style={{ width: 250, height: 250, marginLeft: 50 }}
          src={item.img}
          alt={item.name}
        />
        <div className="card-body">
          <h5>{item.name}</h5>
          <p className="card-title">Price: {item.price.toLocaleString()}</p>
          <button className="btn btn-success" onClick={()=>{this.props.addProduct(item)}}>Add</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (phone) => {
      let newPhone = {
        id: phone.id,
        name: phone.name,
        price: phone.price,
        img: phone.img,
        quantity: 1,
      };
      let action = {
        type: "ADD_PRODUCT",
        payload: newPhone,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(PhoneRedux);