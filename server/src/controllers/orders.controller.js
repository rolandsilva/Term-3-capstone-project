import { Error } from "mongoose";
import { Order, ShippingAddress } from "../models";

export async function handleGetOrders(req, res) {
  const orders = await Order.find();
  res.send(orders);
}

export async function handleCreateOrder(req, res, next) {
  const { orderNumber, items, couponRate, orderTotal } = req.body;
  // const { orderNumber, items, couponRate, orderTotal } = req.body;
  // const { orderNumber, orderContents, couponRate, orderTotal } = req.body;
  console.log("req.body console", req.body)
  // const itemIdList = items.map((i) => i._id);
  const orderData = {
    // orderNumber: ` ${orderNumber}`,
    orderContents: items,
    // orderContents: orderContents,
    couponRate: couponRate,
    orderTotal: orderTotal,
    shippingTime: 7,
    shippingDate: Date.now(),
  };
  try {
    const createOrder = new Order(orderData);
    await createOrder.save();
    console.log(createOrder);
    const orderId = createOrder._id;
    res.json({ orderData: orderData, orderId: orderId });
  } catch (error) {
    console.log(error)
    next(new Error("Error Placing Order"));
  }
}

export async function handleDeleteOrder(req, res, next) {
  next(new Error("route not implemented"));
}
