import User from '../models/User';
import { sign } from 'jsonwebtoken';
import { response } from 'express';

export const register = async(obj: any) => {
    const user = await User.create(obj);
    console.log(user)
    return user;
};

export const signIn = async(obj: any) => {
    const user = await User.findOne({ email: obj}).select('+password');

    if(user){
        return { user };
    }else{
        return { error: "Could not find User" };
    };
}