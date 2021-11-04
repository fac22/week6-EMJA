import { addToBasket } from "../../database/model";

export default function BasketHandler(req, res) {
  const cupcake = req.body;
  console.log(cupcake);
  const { name, price, quantity, size } = cupcake;
  addToBasket(cupcake);
}
