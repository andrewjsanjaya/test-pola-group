import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  function homeButton(e) {
    e.preventDefault();
    navigate(`/`);
  }

  return (
    <div>
      <button onClick={homeButton}>Back</button>
    </div>
  );
}
