
import mongoose from "mongoose";
import Products from "./models/products";
import { DB_URL } from "./config/db.config";



  const products = 
{
  id: 1111, productNbr: "MGX82LL", name: "2024 M4 MacBook Pro Laptop", category: "laptops", price: 4500, features: ["	Portable design", "Lightweight and under half an inch thin", "Get more done faster", "The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly", "Up to 18 hours of battery life — Amazing, all-day battery life so you can leave the power adapter at home", "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors", "Look sharp, sound great — Everything looks and sounds amazing with a 1080p FaceTime HD camera, three mics, and four speakers with 	Spatial Audio"], specifications: ["10 core cpu", "10 core gpu", "16-core Neural Engine", "13/15-inch Liquid Retina display with True Tone", "1080p FaceTime HD camera"," MagSafe 3 charging port", "Two Thunderbolt / USB 4 ports", "Support for up to two external","displays (with laptop lid closed)", "Magic Keyboard with Touch ID", "Force Touch trackpad", "35W Dual USB-C Port Compact PowerAdapter"], availability: 99, image_url: "/mbair.png"
}

{
  id: 1112, productNbr: "MGX82LL/A", name: "2024 M4 MacBook Air", category: "laptops", price: 1699, features: ["", "", "Get more done faster", "", "", ""], specifications: ["10 core cpu", "10 core gpu", "16-core Neural Engine", "13/15.3-inch Liquid Retina display with True Tone", "1080p FaceTime HD camera", "MagSafe 3 charging port", "Two Thunderbolt / USB 4 ports", "Support for up to two external displays (with laptop lid closed)", "Magic Keyboard with Touch ID", "Force Touch trackpad", "35W Dual USB-C Port Compact Power Adapter"], availability: 16, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MNN72LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MQD32LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "M1FJ3LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: " MHXH3LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MWP22AM/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MK2E3LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MKQX2LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MYD82LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MLWK3LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MXQU2LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MN662LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: " MK193LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

{
  id: 1111, productNbr: "MPXV2LL/A", name: "", category: "laptops", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
}

async function insertProducts() {
  try {
    await mongoose.connect("mongodb+srv://rolandsilvajr:khCydihqJWxkgCYV@cluster0.zovhy6d.mongodb.net/capstone?retryWrites=true&w=majority&appName=Cluster0", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log("Connected to MongoDB");

    const result = await Products.insertMany(products);
    console.log(`${result.length} products were inserted`);
  } catch (err) {
    console.error("Error inserting products:", err);
  } finally {
    mongoose.connection.close();
  }
}

insertProducts();



// SeedDatabase from kenzie cart products
// import { connect, disconnect } from "mongoose";
// import chalk from "chalk";
// import User from "./models/user";
// import Product from "./models/product";
// import keys from "./config/keys";


// async function seedDatabase() {
//   try {
//     await connect(keys.database.url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     const users = await User.find({});
//     const products = await Product.find({});
//     if (users.length === 0 && products.length === 0) {
//       console.log(
//         chalk.yellow(
//           "No users or products in the database, creating sample data..."
//         )
//       );
    //   const user = new User({ name: "John Doe", age: 34 });
    //   await user.save();
    //   console.log(chalk.green("Sample user successfuly created!"));
//       const newProducts = [
//         {
//           name: "Bluetooth Speaker",
//           description:
//             "This is a small product description to explain the item…",
//           price: 30,
//           quantity: 50,
//           category: "electronics",
//           productImage: "speaker.png",
//         },
//       ];
//       await Product.insertMany(newProducts);
//       console.log(
//         chalk.green(`${newProducts.length} product(s) successfuly created!`)
//       );
//     } else {
//       console.log(
//         chalk.yellow("Database already initiated, skipping populating script")
//       );
//     }
//   } catch (error) {
//     console.log(chalk.red(error));
//   }
// }

// {
//     name: "Unisex Perfume",
//     description:
//       "This is a small product description to explain the item…",
//     price: 15,
//     quantity: 50,
//     category: "wellness",
//     productImage: "perfume.png",
//   },



// const productsSchema = new mongoose.Schema(
//   {
//     id: {
//       type: 1111,
//       required: true,
//     },
//     productNbr: {
//         type: MGX82LL,
//         required: true,
//       },
//     name: {
//       type: "2023 MacBook Air",
//       required: true,
//     },
//     category: {
//       type: "laptop",
//       required: true,
//     },
//     price: {
//       type: 4500,
//       required: true,
//     },
//     features: {
//       type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
//       required: true,
//     },
//     specifications: {
//       type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
//       required: true,
//     },
//     availability: {
//       type: 99,
//       required: true,
//     },
//     image_url: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Products = mongoose.model("Products", productsSchema);

// export default Products;