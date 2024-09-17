import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "./components/UI/Button/Modal/Modal";
import { productList } from "./Data";
import Button from "./components/UI/Button/Button";
function App() {
  /* ــــــــSTATEــــــــ */
  const [isOpen, setIsOpen] = useState(false);

  /* ــــــــHANDLERــــــــ */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  /* ــــــــRENDERــــــــ */
  const renderProductList = productList.map((product) => <ProductCard product={product} key={product.id} />);

  return (
    <>
      <main className="container">
        <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" onClick={open}>
          Add
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">{renderProductList}</div>
      </main>
      <Modal isOpen={isOpen} closeModal={close} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">
            Submit
          </Button>
          <Button className="bg-gray-300 hover:bg-gray-400" width="w-full">
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default App;
