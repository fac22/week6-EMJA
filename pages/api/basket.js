import { addToBasket } from "../../database/model";

export default function BasketHandler(req, res) {
  const cupcake = req.body;
  console.log(cupcake);
  const { name, description } = cupcake;
  // res.send(cupcake).redirect("/");
  addToBasket(cupcake);
}
