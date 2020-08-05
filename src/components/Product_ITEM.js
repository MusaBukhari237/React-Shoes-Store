// Import React ,Json File For Products Data and React Router Dom
import React from "react";
import Products from "./../Products.json";
import { Link , useParams} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Product() {
  let {Productid} = useParams();
  let Product = Products[Productid];

  
  if (!Product)
  return (
  <div>
      <Link to="/Product">
    <h1 class="Back_to_Product"><KeyboardBackspaceIcon/></h1>
    </Link>
    <h1 class="titlebar">Product Not Found</h1>
  </div>

  );

  function FlipDetails(){
    

  };
  return (
    <div>
    <Link to="/Product">
    <h1 class="Back_to_Product"><KeyboardBackspaceIcon/></h1>
    </Link>
      
      <h1 class="titlebar">Product Details</h1>
      <div className="Product_box">
      <div>
              <div key={Productid} className="Product Product_ITEM" onMouseOver={FlipDetails()}>
              <div class="box-title">
              <h2 class="product-title">{Product.name}</h2>
              </div>
              <div class="box-img">
              <img class="product-img" src={Product.img} alt="lamp"  />
              </div>
              <div class="box-price">
              <h4 class="product-price"><b class="product-b-price" >Price : </b>{Product.price}</h4>
              </div>

              <div class="box-desc">
              <h5>Description</h5>
              <h2 class="product-desc">{Product.desc}</h2>
              </div>
              
            </div>
</div>
      </div>
    </div>
  );
};

export default Product;
