import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: {
        type: String,
        minlength: 5,
    },
    createdAt: { type: Date, default: Date.now() },
    username: {
        type: String,
    },
    token: String
})

const User = mongoose.model("user", userSchema);

export default User;