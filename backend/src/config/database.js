const mongoose = require("mongoose")
const env = require("dotenv")



 
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
};


module.exports = connectDB;