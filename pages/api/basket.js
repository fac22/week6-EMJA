import { addToBasket } from "../../database/model";

export default function BasketHandler(req, res) {
  const cupcake = req.body;
  const { name, price, quantity, size } = cupcake;
  console.log(cupcake.quantity);

  addToBasket(cupcake);
}
