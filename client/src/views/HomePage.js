import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";

export default function HomePage() {
  // const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // dispatch(fetchProducts());
    const fetchData = async () => {
      const data = await axios.get("https://burgers1.p.rapidapi.com/burgers", {
        headers: {
          "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5f5541a816mshba2860753a9fe47p1650d3jsn6d12be868ab9",
        },
      });
      setProducts(data.data);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <div>
        {products.map((product) => (
          <CardList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
