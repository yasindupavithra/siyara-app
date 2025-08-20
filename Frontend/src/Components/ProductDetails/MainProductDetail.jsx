import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/detail.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/ProductDetails/action";
import { Slider } from "./Slider";
import { addItemsToCart } from "../../Redux/Cart/action";

export const MainProductDetail = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const [pincode, setPincode] = useState("");
  const handlerChange = (e) => setPincode(e.target.value);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, 1));
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="detail">
        <div className="img">
          {product?.images &&
            product.images.map((item, i) => <Slider key={i} img={item.url} />)}
        </div>
        <div className="data">
          <div className="product-name">
            <h2>{product?.description}</h2>
            <FavoriteBorderOutlined className="heart" />
          </div>
          <h4 className="company">{product?.name}</h4>
          <br />
          <h6>36 Month's Warranty</h6>
          <br />
          <h1>
            ₹
            {Math.round(
              product?.price - (product?.price * product?.discount_percentage) / 100
            )}
          </h1>
          <h5>
            Save ₹
            {product?.price -
              Math.round(product?.price - (product?.price * product?.discount_percentage) / 100)}
          </h5>
          <div className="line"></div>
          <br />
          <h4>
            Last Day to{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Earn Cashback upto 5%
            </a>
          </h4>

          <a href="#" onClick={(e) => e.preventDefault()}>
            EMI option
          </a>
          <br />
          <br />
          <img className="offer" src="https://picsum.photos/seed/promo/728/90" alt="" />
          <br />
          <br />
          <label>
            DELIVERY &emsp; &emsp; &emsp; &emsp;Enter Pincode to get Delivery
            Date, Assembly Information and other details
          </label>
          <br />
          <input
            type="number"
            placeholder="Enter a Pincode"
            value={pincode}
            onChange={handlerChange}
            className="pincode"
          />
          <button className="pinBtn">APPLY</button>
          <br />
          <br />
          <h4 className="del">
            Delivery charges as applicable <b>Pincode Required</b>
          </h4>
          <h4 className="del">
            Assembly Charges as applicable <b>Pincode Required</b>
          </h4>
          <br />
          <div className="button">
            <button className="add" onClick={addToCartHandler}>
              ADD TO CART
            </button>
            <Link to={`/cart`}>
              <button className="buy">BUY NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
