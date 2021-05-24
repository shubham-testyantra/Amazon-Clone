import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket >>>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <span>{title}</span>
        <div>
          <span className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </span>
        </div>
        <div className="product_rating">
          <span className="star_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span>
                  <i class="fas fa-star"></i>
                </span>
              ))}
          </span>
        </div>
      </div>
      <div className="product_ImageBlock">
        <img src={image} alt="product_image" />
      </div>
      <div>
        <button onClick={addToBasket} className="btn btn-block">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
