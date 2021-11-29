import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    is_Active: {
        type: Boolean,
        required: false,
        default: true
    },
    posts: {
        type: mongoose.Schema.Types.Array, ref: 'Posts'
    }
});

export default mongoose.model('User' , Schema);