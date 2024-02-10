import { useEffect, useState } from "react";
import "./template.css";

export default function Loadmore() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      setLoading(false);
      setProducts((prevData) => [...prevData, ...result.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    console.log(products);
    if (products && products.length >= 100) {
      setDisabledButton(true);
    }
  }, [products]);

  if (loading) {
    return <h3>Loading... please wait</h3>;
  }

  return (
    <div className="component container">
      <div className="product-container">
        {products.map((item) => {
          const { id, title, thumbnail } = item;
          return (
            <div key={id} className="card">
              <img src={thumbnail} alt={title} />
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
          {disabledButton
            ? "you have visited 100 products"
            : "Load more products"}
        </button>
      </div>
    </div>
  );
}
