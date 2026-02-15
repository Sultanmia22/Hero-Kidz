'use server';
import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    try {
        const productCollection = dbConnect('products');

        const products = await productCollection.find().toArray();

        return products;
    }
    catch (er) {
        console.log(er.message)
    }
}

export const detailsProduct = async (id) => {
    try{
        const productCollection = dbConnect('products');

        const query = {_id: new ObjectId(id)}

        const product = await productCollection.findOne(query);
        
        return product;
    }
    catch(er){
        console.log(er.message)
    }
}