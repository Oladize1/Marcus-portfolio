import mongoose from "mongoose"
import { connectDb } from "./config/connectDb"
import { Admin } from "./models/Admin.model"
import bcrypt from 'bcryptjs'

(async () => {
    try {
        const adminUsername = process.env.ADMIN_USERNAME
        const adminPassword = process.env.ADMIN_PASSWORD
        const uri = process.env.MONGO_URI
        if (!uri) {
          throw new Error("MONGO_URI is missing");
        }

        await connectDb(uri);
        if (!adminUsername || !adminPassword) {
            throw new Error("Missing admin credentials in env");
        }
        const existingAdmin = await Admin.findOne({ username: adminUsername });

        if (existingAdmin) {
          console.log("Admin already exists");
          await mongoose.connection.close()
          process.exit(0);
        }
        const hashPassword = await bcrypt.hash(adminPassword, 10)
        const admin = new Admin({
            username: adminUsername,
            password: hashPassword,
            role: 'admin'
        })
        await admin.save()
        console.log("Admin created successfully");
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error("Failed to create Admin", error)
        if (mongoose.connection.readyState !== 0) {
          await mongoose.connection.close();
        }
        process.exit(1);
    }
})()


