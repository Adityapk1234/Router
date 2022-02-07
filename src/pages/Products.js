import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <Link to="/products/p1">
        <p>A book</p>
      </Link>
      <Link to="/products/p2">
        <p>A carpet</p>
      </Link>
      <Link to="/products/p3">
        <p>A car</p>
      </Link>
    </section>
  );
};

export default Products;
