import { IProduct } from "../../Interfaces";
import { textSlicer } from "../../Utils/functions";
import CircleColor from "../CircleColor/CircleColor";
import Image from "../Image/Image";
import Button from "../UI/Button/Button";
interface IProps {
  product: IProduct;
  openModal: () => void;
}

const ProductCard = ({ product, openModal }: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  const renderProductColors = colors.map((color) => <CircleColor key={color} color={color} />);
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
        <Image imageURL={imageURL} alt={title} className="rounded-md h-52 w-full lg:object-cover mb-2" />

        <h3 className="text-lg font-semibold">{textSlicer(title, 25)}</h3>
        <p className="text-xs text-gray-500 break-words">{textSlicer(description)}</p>

        <div className="flex flex-wrap items-center space-x-1">{renderProductColors}</div>

        <div className="flex justify-between items-center">
          <span className="text-lg text-indigo-600 font-semibold">${price}</span>
          <Image imageURL={imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom" />
        </div>

        <div className="flex justify-between items-center space-x-2">
          <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" onClick={openModal}>
            EDIT
          </Button>
          <Button className="bg-red-700 hover:bg-red-800" width="w-full">
            DELETE
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
