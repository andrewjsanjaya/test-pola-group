import { useNavigate } from "react-router-dom";

export default function CardList({ product }) {
  console.log(product, "<<");
  const navigate = useNavigate();

  function detail(e) {
    e.preventDefault();
    // navigate(`/product/${product.id}`);
  }

  return (
    <div>
      <h1 onClick={detail}>{product.name}</h1>
    </div>
  );
}
