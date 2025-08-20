import { useEffect, useState } from "react";
import {
  Blue,
  Green,
  Orange,
  PriceContainer,
  PriceWraper,
  TotalPrice,
  Hr,
  PriceDiv,
} from "./PriceCSS";
import { useSelector } from "react-redux";

const Price = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // If you really need item count later, add:
  // const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let sumItems = 0;
    let sumPrice = 0;
    let sumDiscount = 0;

    cartItems.forEach((el) => {
      sumItems += el.quantity;
      sumPrice += el.price * el.quantity;
      // include quantity in discount too
      sumDiscount += Math.round((el.price * el.discount * el.quantity) / 100);
    });

    const finalPrice = sumPrice - sumDiscount;

    // setTotalItem(sumItems); // enable if you render it
    setPrice(sumPrice);
    setDiscount(sumDiscount);
    setTotalPrice(finalPrice + 99 + 1500); // GiveIndia + Assembly
  }, [cartItems]);

  return (
    <PriceDiv>
      <PriceWraper>
        <PriceContainer>
          <div>
            <div className="cardDisplay">
              <div>Cart Value</div>
              <div>₹ {price}</div>
            </div>

            <div className="cardDisplay">
              <Green>Retail Discount </Green>
              <Green>(-) ₹ {discount}</Green>
            </div>

            <div className="cardDisplay">
              <Blue>Cashback/Refund Credits Redeemed</Blue>
              <Blue>(-) ₹ {0}</Blue>
            </div>

            <div className="cardDisplay">
              <div>
                Delivery <Orange> (FREE) </Orange>
              </div>
              <div>₹ 0</div>
            </div>

            <div className="cardDisplay">
              <div>Assembly</div>
              <div>₹ 1500</div>
            </div>

            <div className="cardDisplay">
              <div>GiveIndia</div>
              <div>₹ 99</div>
            </div>
          </div>

          <Hr />

          <TotalPrice>
            <div className="total">Total</div>
            <div>
              <div className="totalPrice">₹ {totalPrice}</div>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
          </TotalPrice>

          <Hr />
        </PriceContainer>
      </PriceWraper>
    </PriceDiv>
  );
};

export default Price;
