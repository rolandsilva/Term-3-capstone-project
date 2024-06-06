import { Order } from "../models";

export async function handleGetOrders(req, res) {
  const orders = await Order.find();
  res.send(orders);
}

export async function handleCreateOrder(req, res, next) {
  const {
    customerDetails: { firstName, lastName, email, address1, address2 },
    items,
    couponRate,
    orderTotal,
  } = req.body;
  const itemIdList = items.map((i) => i._id);
  const orderData = {
    customerName: `${firstName} ${lastName}`,
    customerEmail: email,
    customerAddress1: address1,
    customerAddress2: address2,
    items: itemIdList,
    couponRate: couponRate,
    orderTotal: orderTotal,
  };
  try {
    const createOrder = new Order(orderData);
    await createOrder.save();
    console.log(createOrder)
    const orderId = createOrder._id
    res.json({orderData: orderData, orderId: orderId});
  } catch (error) {
    next(new Error("Error Placing Order"));
  }
}

export async function handleDeleteOrder(req, res, next) {
  next(new Error("route not implemented"));
}
