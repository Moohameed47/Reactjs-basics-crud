import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { productList } from "./Data";
function App() {
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <>
      <main className="container">
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
          {renderProductList}
        </div>
      </main>
    </>
  );
}

export default App;
