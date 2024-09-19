import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "./components/UI/Modal/Modal";
import { formInputsList, productList } from "./Data";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import { IProduct } from "./Interfaces";
import { productValidation } from "./Validations";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* ــــــــSTATEــــــــ */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  /* ــــــــHANDLERــــــــ */
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    close();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, price, imageURL } = product;
    const errors = productValidation({ title: title, description: description, imageURL: imageURL, price: price });
    // console.log(errors);

    const hasErrorMsg = Object.values(errors).some((value) => value == "") && Object.values(errors).every((value) => value == "");
    // console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("SEND THIS PRODUCT TO OUR SERVER");
  };

  /* ــــــــRENDERــــــــ */
  const renderProductList = productList.map((product) => <ProductCard product={product} key={product.id} openModal={open} />);
  const renderAllInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label className="text-sm font-medium text-gray-700 mb-[1px]" htmlFor={input.id}>
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]} />
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
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderAllInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" type="submit">
              Submit
            </Button>
            <Button className="bg-gray-400 hover:bg-gray-500" width="w-full" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default App;
