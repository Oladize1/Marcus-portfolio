import mongoose from 'mongoose'

export const connectDb = async (uri: string) => {
    try {
        const conn = await mongoose.connect(uri)
        console.log('database connected successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Database connection failed')
    }
}