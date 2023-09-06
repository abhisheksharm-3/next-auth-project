import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please Provide a username"],
            unique: true, minlength: [4, "Username must be atleast 5 characters long"]
        },
        email: {
            type: String,
            required: [true, "Please provide a email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],

        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date, 
        verifyToken: String,
        verifyTokenExpiry: Date,

    }
)

const User = mongoose.models.users || mongoose.model(
    "users", userSchema  // name of the collection in mongoDB
);

export default User;