import ProductsModel from '@/models/products'
import database from '@/config/database'

export default async function handler(req,res){

    database()

    switch(req.method){
        case "POST":
            try {
                var product = await ProductsModel.create(req.body)
                res.status(201).json({
                    success:true,
                    message:product
                })
        
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
            break
        case "GET":
            try {
                var products = await ProductsModel.find()
                res.status(201).json({
                    success:true,
                    message:products
                })
        
            } catch (error) {
        
                res.status(500).json({
                    success:false,
                    message:error.message
                })
            }
            break
        default:
            res.status(500).json({
                success:false,
                message:"Method Not Allowed!"
            })
    }
}