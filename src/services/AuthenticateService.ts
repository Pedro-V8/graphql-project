import User from '../models/User';
import bcrypt from 'bcryptjs';
import generateToken from './GenerateToken';

export const register = async(obj: any) => {
    const findUser = await User.findOne({ email: obj.email });
    if(findUser){
        return { error: "User Already exists" };
    }else{
        const user = await User.create(obj);

        return user;
    }
};

export const signIn = async({ email , password }: any) => {
    const user = await User.findOne({ email: email}).select('+password');

    if(user){
        if(!await bcrypt.compare(password , user.password)){
            return { error: "Wrong Password" };
        }else{
            const token = generateToken({} , user.id);

            return { user , token }; 
        }
    }else{
        return { error: "Could not find User or Wrong Passwor" };
    };
}