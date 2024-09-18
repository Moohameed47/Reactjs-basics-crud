import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "./components/UI/Modal/Modal";
import { formInputsList, productList } from "./Data";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
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
  const renderProductList = productList.map((product) => <ProductCard product={product} key={product.id} openModal={open} />);
  const renderAllInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-[1px]" htmlFor={input.id}>
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <>
      <main className="container">
        <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" onClick={open}>
          Add
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">{renderProductList}</div>
      </main>
      <Modal isOpen={isOpen} closeModal={close} title="ADD A NEW PRODUCT">
        <form className="space-y-3">
          {renderAllInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">
              Submit
            </Button>
            <Button className="bg-gray-400 hover:bg-gray-500" width="w-full">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default App;
