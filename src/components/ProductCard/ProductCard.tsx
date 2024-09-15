import Image from "../Image/Image";
import Button from "../UI/Button/Button";

const ProductCard = () => {
  return (
    <>
      <div className="border rounded-md p-2 flex flex-col">
        <Image
          imageURL="https://images.pexels.com/photos/1082653/pexels-photo-1082653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={"product Name"}
          className="rounded-md mb-2"
        />
        <h3>Product card</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam
          nesciunt illum ut delectus est rem minima, tempora sed vitae?
        </p>
        <div className="flex items-center my-4 space-x-2">
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>

        <div className="flex justify-between items-center">
          <span>$500,000</span>
          <Image
            imageURL="https://images.pexels.com/photos/1082653/pexels-photo-1082653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={"product Image"}
            className="w-10 h-10 rounded-full object-center"
          />
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
          <Button className="bg-green-700" width="w-full">
            SUCCESS
          </Button>
          <Button className="bg-gray-700" width="w-full">
            CANCEL
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
