import User from '../../models/User';
import Post from '../../models/Posts';
import { register } from '../../services/AuthenticateService';

function deletaPost(arr: any){
    arr.forEach((e: any) => {
        async () => await Post.deleteOne(e)
    });
}

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_: any, {id}: any) =>{
            const user =  await User.findById(id).populate('posts');

            return user;
        },
    },
    Mutation: {
        createUser: async (_:any , {data}:any) => {
            const user: any = register(data);
            // console.log(user);
            return user;
        },
        updateUser: async (_: any , {id , data }: any) => await User.findOneAndUpdate(id , data),
        deleteUser: async (_: any , {id }: any ) => {
            await User.findByIdAndDelete(id);
            return true;
        },
    },
};