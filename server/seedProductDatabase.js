
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;


{
    name: "Unisex Perfume",
    description:
      "This is a small product description to explain the item…",
    price: 15,
    quantity: 50,
    category: "wellness",
    productImage: "perfume.png",
  },


const productsSchema = new mongoose.Schema(
  {
    id: {
      type: 1111,
      required: true,
    },
    productNbr: {
        type: 24,
        required: true,
      },
    name: {
      type: "2024 M4 MacBook Pro Laptop",
      required: true,
    },
    category: {
      type: "laptop",
      required: true,
    },
    price: {
      type: 4500,
      required: true,
    },
    features: {
      type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
      required: true,
    },
    specifications: {
      type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
      required: true,
    },
    availability: {
      type: 99,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;





import mongoose from "mongoose";
import Products from "./models/products";
// import Albums from "./models/albums";
import keys from "./config/keys";

// const albums = [
//   {
//     title: "Abbey Road",
//     year: 1969,
//     albumArtist: {
//       name: "Beatles",
//       members: ["Ringo", "John", "George", "Paul"],
//     },
//     albumSongList: [
//       { title: "Come Together", duration: 239 },
//       { title: "Something", duration: 182 },
//       { title: "Maxwell’s Silver Hammer", duration: 207 },
//       { title: "Oh! Darling", duration: 206 },
//       { title: "Octopus’s Garden”", duration: 111 },
//       { title: "I Want You (She’s So Heavy)", duration: 467 },
//       { title: "Here Comes the Sun", duration: 186 },
//       { title: "Because", duration: 166 },
//       { title: "You Never Give Me Your Money", duration: 242 },
//       { title: "Sun King", duration: 146 },
//       { title: "Mean Mr. Mustard", duration: 66 },
//       { title: "Polythene Pam", duration: 73 },
//       { title: "She Came In Through the Bathroom Window", duration: 117 },
//       { title: "Golden Slumbers", duration: 91 },
//       { title: "Carry That Weight", duration: 96 },
//       { title: "The End", duration: 140 },
//       { title: "Her Majesty ", duration: 23 },
//     ],
//   },
// ];

// async function insertAlbums() {
//   try {
//     await mongoose.connect(keys.database.url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     console.log("Connected to MongoDB");

//     const result = await Albums.insertMany(albums);
//     console.log(`${result.length} albums were inserted`);
//   } catch (err) {
//     console.error("Error inserting albums:", err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// insertAlbums();






{
    name: "Unisex Perfume",
    description:
      "This is a small product description to explain the item…",
    price: 15,
    quantity: 50,
    category: "wellness",
    productImage: "perfume.png",
  },


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
