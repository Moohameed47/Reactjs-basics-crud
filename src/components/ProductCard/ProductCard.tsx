import { IProduct } from "../../Interfaces";
import { textSlicer } from "../../Utils/functions";
import Image from "../Image/Image";
import Button from "../UI/Button/Button";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
        <Image imageURL={imageURL} alt={title} className="rounded-md h-52 w-full lg:object-cover mb-2" />

        <h3>{title}</h3>
        <p>{textSlicer(description)}</p>

        <div className="flex items-center my-4 space-x-2">
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>

        <div className="flex justify-between items-center">
          <span>${price}</span>
          <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-center" />
        </div>

        <div className="flex justify-between items-center space-x-2 mt-5">
          <Button
            className="bg-indigo-700"
            width="w-full"
            onClick={() => {
              console.log("EDIT");
            }}
          >
            EDIT
          </Button>
          <Button className="bg-red-700" width="w-full">
            DELETE
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
