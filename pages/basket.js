import { getBasket } from "../database/model";

export default async function Basket() {
  const basketItems = await getBasket();
  console.log(basketItems);
  return <h1>This is the basket page</h1>;
}
