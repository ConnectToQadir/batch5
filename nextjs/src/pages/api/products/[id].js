import ProductsModel from '@/models/products'
import database from '@/config/database'

export default async function handler(req,res){

    database()

    var foundProduct

    try {

        foundProduct = await ProductsModel.findById(req.query.id)
        if(!foundProduct){
            res.status(404).json({
                success:false,
                message:"Product Not Found!"
            })
            return
        }


    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Invalid Product Id sent!"
        })
        return
    }

    try {
        switch(req.method){
            case "GET":
                res.status(200).json({
                    success:true,
                    message:foundProduct
                })
                break
            case "PUT":
                await ProductsModel.findByIdAndUpdate(req.query.id,{$set:req.body},{new:true})
                res.status(201).json({
                    success:true,
                    message:"Product Updated Successfully!"
                })
                break
            case "DELETE":
                await ProductsModel.findByIdAndDelete(req.query.id)
                res.status(201).json({
                    success:true,
                    message:"Product Deleted Successfully!"
                })
                break
            default:
                res.status(500).json({
                    success:false,
                    message:"Method Not Allowed!"
                })
        }
    } catch (error) {
        if(error.code === 11000){
            res.status(409).json({
                success:false,
                message:"Product Title already exists!"
            })
            return
        }

        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}