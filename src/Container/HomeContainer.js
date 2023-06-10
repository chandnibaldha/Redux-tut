//import React from "react";
import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCart } from "../Service/Action/action";

const mapStateToProps = (State) => ({
  data: State.cardItems
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
