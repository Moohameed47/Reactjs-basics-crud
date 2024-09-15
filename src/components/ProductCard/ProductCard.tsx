interface IProps {}
const ProductCard = ({}: IProps) => {
  return (
    <>
      <div className="border rounded-md p-2 flex flex-col">
        <img
          src="https://images.pexels.com/photos/1082653/pexels-photo-1082653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
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
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.pexels.com/photos/1082653/pexels-photo-1082653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center space-x-2 mt-5">
          <button className="bg-indigo-700 p-2 flex-1 rounded-md text-white">
            EDIT
          </button>
          <button className="bg-red-700 p-2 flex-1 rounded-md text-white">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
