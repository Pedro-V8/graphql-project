import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
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

Schema.pre('save' , async function(next){
    const hash = await bcrypt.hash(this.password , 10)
    this.password = hash;
    next()
})

export default mongoose.model('User' , Schema);