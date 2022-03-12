import { useParams } from "react-router-dom";

export default function ProductPage(props) {

  const { productId } = useParams();
  console.log(productId);

  return (
    <main>
      {productId}
    </main>
  );
};