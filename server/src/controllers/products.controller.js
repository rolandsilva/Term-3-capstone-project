// import Product from "../../../client/src/components/Product/Product";
import { Products } from "../models";

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