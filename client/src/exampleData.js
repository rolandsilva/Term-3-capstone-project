const exampleProductData = {
  id: 1111,
  name: "airPod Pro",
  category: "headphones",
  price: "$130.99",
  features: "colors",
  specifications: "two ear pieces",
  availability: 99,
  image_url: "https: String",
};

const exampleOrderData = {
  id: 2222,
  orderNumber: 123456,
  itemNumber: 1111,
  itemQuantity: 2,
  itemSpecifications: "1 unit",
  itemShippingTime: 1400,
  itemShippingDate: 20240605,
};

const exampleCustomerData = {
  id: 3333,
  customerFirstName: "John",
  customerLastName: "Smith",
  passwordHash: string,
  customerEmail: "john@me.com",
  customerAddress1: "123 Smith Lane",
  customerAddress2: "Second Floor",
  customerCity: "Smithville",
  customerState: "New Hampshire",
  customerZipCode: 12345,
  customerPhone: "(111) 222-3333)",
  customerPassword: "js1234",
  //   orders: Array
};

const exampleStockAlertData = {
  id: 4444,
  productId: 12345,
  userId: 11111,
  email: "john@me.com",
};

const exampleFAQData = {
  id: 5555,
  productName: "headset",
  faqInformation: "pretty",
};

export default {
  exampleProductData,
  exampleOrderData,
  exampleCustomerData,
  exampleStockAlertData,
  exampleFAQData,
};
