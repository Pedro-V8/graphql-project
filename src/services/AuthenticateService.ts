import User from '../models/User';
import { sign } from 'jsonwebtoken';


export const signIn = async(obj: any) => {
    const user = await User.findOne({ email: obj});
    console.log(user)
    if(user){
        return { user };
    };
}