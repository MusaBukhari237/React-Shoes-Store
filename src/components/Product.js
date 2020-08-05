// Import React ,Json File For Products Data and React Router Dom
import React from "react";
import Products from "./../Products.json";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>

      <h1 class="titlebar">Products</h1>

      {/* Products Loop */}
      <div className="Product-Container">
        {Object.keys(Products).map((keyName , ind) => {
          let Product = Products[keyName];
          return (
            <Link key={keyName} id={ind} to={`/Product/${keyName}`} className="Product">
              <div class="box-title">
              <h2 class="product-title">{Product.name}</h2>
              </div>
              <div class="box-img">
              <img class="product-img" src={Product.img} alt="lamp"  />
              </div>
              <div class="box-price">
              <h4 class="product-price"><b class="product-b-price" >Price : </b>{Product.price}</h4>
              </div>
            </Link>
          );
        })
        }
      </div>
    </div>
  );
};

export default Product;
