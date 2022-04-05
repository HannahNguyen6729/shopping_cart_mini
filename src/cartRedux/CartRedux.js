import React, { Component } from "react";
import CartModalRedux from "./CartModalRedux";
import PhoneListRedux from "./PhoneListRedux";
import {connect} from 'react-redux';

class CartRedux extends Component {
  renderTotalQuantity = (arr)=> {
    return arr.reduce((total, curr, index)=> (total += curr.quantity),0).toLocaleString()
  };
  render() {
    let {cartList} = this.props;
    return (
      <div className="text-center">
        <h4 className="mt-3">Phone List</h4>
        <div className="text-right mr-5 mb-2" data-toggle="modal" data-target="#modelId">
          <button className="btn btn-danger " >
            <i className="fa fa-shopping-cart"></i>
            ({this.renderTotalQuantity(cartList)}) Cart
          </button>
        </div>

        <PhoneListRedux />
        <CartModalRedux />
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return { 
    cartList: state.cart.productList
  }
}
export default connect(mapStateToProps)(CartRedux)
