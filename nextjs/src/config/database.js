import mongoose from 'mongoose'


const database  = () =>{
    try {
        if(mongoose.connection.readyState >= 1 ){
            return
        }

        mongoose.connect("mongodb://127.0.0.1:27017/nextjs")


    } catch (error) {
        return false
    }
}


export default database