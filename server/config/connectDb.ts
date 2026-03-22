import mongoose from 'mongoose'

export const connectDb = async (uri: string) => {
    try {
        await mongoose.connect(uri)
        console.log(`database connected successfully running in ${process.env.NODE_ENV} mode`);
    } catch (error) {
        console.log(error);
        throw new Error('Database connection failed')
    }
}