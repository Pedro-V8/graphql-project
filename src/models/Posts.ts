import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    }
})

export default mongoose.model('Posts' , Schema);