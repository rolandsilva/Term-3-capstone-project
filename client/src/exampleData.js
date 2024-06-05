const exampleProductData = {
id: 1111,
name: "airPod Pro",
category: "headphones",
price: "$130.99",
features: "colors",
specifications: "two ear pieces",
availability: 99,
image_url: "https: String",

}

const exampleOrderData = {
id: 2222,
orderNumber: 123456,
itemNumber: 1111,
itemQuantity: 2,
itemSpecifications: "1 unit",
itemShippingTime: 1400,
itemShippingDate: 20240605,
}

const exampleUserData = {
    id: 3333,
//     - username: String
//     - email: String
//     - address: String
//     - phone: String
//      - password: String
//      - saved items: String
    }
    
const exampleStockAlertData = {
    id: 4444,
//     - product_id: Integer, Foreign Key
//    - user_id: Integer, Foreign Key
//   - email: String
    }

const exampleFAQData = {
    id: 5555, 
//     - product_id: Integer, Foreign Key
//     - FAQ information: String
    }

export default {exampleProductData, exampleOrderData, exampleUserData, exampleStockAlertData, exampleFAQData}