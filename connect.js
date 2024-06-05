import mongoose from 'mongoose'

export const connectToMongoDB = async(url) =>{
    try{
        const res = await mongoose.connect(url)
        if(res){
            console.log('Mongodb Connected!')
        }
    }catch(e){
        console.log('Error')
    }
}
