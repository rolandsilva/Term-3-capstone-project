// import Product from "../../../client/src/components/Product/Product";
import { Products } from "../models";

export async function  handleGetProducts(req, res) {
    try {
        const product = await Products.find();
        console.log(product);
        res.send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error retrieving product"});
    }
  }

  export async function  handleGetProductById(req, res) {
    const id = req.params.id;
    // const product = await Products.find({id: id});
    try {
        const id = req.params.id;
        const product = await Products.findOne({id: id});
        console.log(product);
        res.send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error retrieving product"});
    }
  }

  export async function  handleGetProductsByCategories(req, res) {
    // const name = req.params.name;
    // const product = await Products.find({id: id});
    try {
        const name = req.params.name;
        const category = await Products.find({category: name});
        console.log(category);
        res.send(category);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error retrieving product"});
    }
  }