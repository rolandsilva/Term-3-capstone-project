import { Error } from "mongoose";
import { Order, ShippingAddress, Customer } from "../models";

export async function handleGetOrders(req, res) {
  const orders = await Order.find();
  res.send(orders);
}

export async function handleGetOrdersByCustomerId(req, res) {
  const orders = await Customer.findById(req.customer.id).populate("orders");
  console.log(orders);
  res.send(orders);
}

export async function handleCreateOrder(req, res, next) {
  const { orderNumber, customerDetails, items, couponRate, orderTotal } =
    req.body;
  // const { orderNumber, items, couponRate, orderTotal } = req.body;
  // const { orderNumber, orderContents, couponRate, orderTotal } = req.body;
  console.log("req.body", req.body);
  // I create a new array with the productNbr and itemQuantity as the model expects in the orderContents field.
  const itemsWithProductNumberAndQuantity = items.map((item) => ({
    productNbr: item.productNbr,
    name: item.name,
    category: item.category,
    price: item.price,
    itemQuantity: item.quantity,
    image_url: item.image_url,
  }));

  const orderData = {
    // orderNumber: ` ${orderNumber}`,
    orderContents: itemsWithProductNumberAndQuantity,
    couponRate: couponRate,
    orderTotal: orderTotal,
    shippingTime: 7,
    shippingDate: Date.now(),
  };
  try {
    const createOrder = new Order(orderData);
    await createOrder.save();

    // Find the customer by the customer id and push the order to the customer's orders array for reference.

    const customer = await Customer.findById(req.customer.id);
    customer.orders.push(createOrder);

    // If the customerDetails is provided. Save it to the customer's shipping address. Save the _id from the shipping address to the customer's shippingAddress field.

    if (customerDetails.shippingFirstName && customerDetails.shippingLastName) {
      // destruture the shipping information from the customerDetails object that is from the req.body.
      const {
        shippingFirstName,
        shippingLastName,
        shippingContactPhoneNumber,
        shippingAddress1,
        shippingAddress2,
        shippingCity,
        state,
        shippingZipCode,
      } = customerDetails;

      // Create a new shipping address with the shipping information.
      const shippingAddress = new ShippingAddress({
        shippingFirstName,
        shippingLastName,
        shippingContactPhoneNumber,
        shippingAddress1,
        shippingAddress2: shippingAddress2 ? shippingAddress2 : "",
        shippingCity,
        shippingState: state, // changed from shippingState to state
        shippingZipCode,
      });

      // Save the shipping address.
      await shippingAddress.save();
      // Save the shipping address _id to the customer's shippingAddress field.
      customer.shippingAddress = shippingAddress._id;
    }

    await customer.save();

    const orderId = createOrder._id;
    res.json({ orderData: orderData, orderId: orderId });
  } catch (error) {
    console.log(error);
    next(new Error("Error Placing Order"));
  }
}

export async function handleDeleteOrder(req, res, next) {
  next(new Error("route not implemented"));
}
