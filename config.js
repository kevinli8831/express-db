const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { DB_PASSWORD } = process.env.DB_PASSWORD;
const connectDB = () => {
    return mongoose
        .connect(
            `mongodb://hkairqualityexpress-db:o4IFPRGcKZksa8LWij7kv20VTZUWRN0My5kkazueTf8WPDet145YIgNU33m70JcL7Vv8oYWT73jo2t8soUB9Ug==@hkairqualityexpress-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@hkairqualityexpress-db@n`,
           {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log(`database connected successfully`))
        .catch((err) => console.log(err.message));
};

module.exports = connectDB;
