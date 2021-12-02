import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
import Rating from 'react-rating';

const Product = (props) => {

  // console.log(props);
  const { img, name, price, stock, seller,star } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className="product"> 
      <div>
        <img src={img} alt="" />
      </div>
      <div >
        <h4 className="product-name">{name}</h4>
        <p><small>by: {seller}</small></p>
        <p>Price: {price}</p>
        <p><small>only {stock} left in stock - order soon</small></p>
        <Rating 
        initialRating={star}
        emptySymbol = "far fa-start icon-color"
        fullSymbol="fas fa-start icon-color"
        readonly
        ></Rating>
        <br/>
        <button className="purchase-btn"
        onClick={ () => props.handleAddToCart(props.product)}
        >{element} add to cart</button>    
      </div>
    </div>
  );
};

export default Product;
