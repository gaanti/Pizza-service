import { PizzaForCart } from "./types";

export interface deliveryPizzaOrder extends pizzasOrder {
  deliveryAddress: deliveryAddress
}
export interface pickUpPizzaOrder extends pizzasOrder {
}
interface pizzasOrder {
  timeToBeDone: string
  pizzas: PizzaForCart[],
  contactPerson: string
  notifyMethod?: notifyMethod
  notifyField?: string
}
export enum notifyMethod {
  Telegram="Telegram",
  Phone="Phone",
  Nothing="Nothing"
}
export enum deliveryMethod {
  Delivery="Delivery",
  Pickup="Pickup"
}
export interface deliveryAddress {
  street: string,
  city: string
}