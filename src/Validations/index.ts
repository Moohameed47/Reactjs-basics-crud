/** poductObj === ErrorsObj (TITLE, DESCRIPTION, IMAGE, PRICE) */

export const productValidation = (productObj: { title: string; description: string; imageURL: string; price: string }) => {
  // RETURNS AN OBJECT

  const errors: { title: string; description: string; imageURL: string; price: string } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(productObj.imageURL);

  if (!productObj.title.trim() || productObj.title.length < 10 || productObj.title.length > 80) errors.title = "Product title must be between 10 and 80 characters!";
  if (!productObj.description.trim() || productObj.description.length < 10 || productObj.description.length > 900) errors.description = "Product description must be between 10 and 900 characters!";
  if (!productObj.price.trim() || isNaN(Number(productObj.price))) errors.price = "Product price must be a number!";
  if (!productObj.imageURL.trim() || !validURL) errors.imageURL = "Valid Image must be a real URL!";

  return errors;
};
