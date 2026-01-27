import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: {
        type: String,
        minlength: 5,
        maxlength: 30
    },
    createdAt: Date.now(),
    username: {
        type: String,
    }
})

const User = mongoose.model("user", userSchema);

export default User;