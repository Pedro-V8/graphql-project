import User from '../../models/User';
import Post from '../../models/Posts';
function deletaPost(arr: any){
    arr.forEach((e: any) => {
        async () => await Post.deleteOne(e)
    });
}

function retornaPosts(arr: any){
    const mArr: any = [];
    arr.forEach((e: any) =>{
        async function teste() {
            const myPost = await Post.findById(e)
            mArr.push(myPost)
        }
        teste()
    });
    //console.log(arr);
    return mArr;
}

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_: any, {id}: any) =>{
            const user =  await User.findById(id)
            const usArr: any = retornaPosts(user.posts);
            
            //console.log(user);
            return user;
        },
    },
    Mutation: {
        createUser: async (_:any , {data}:any) => await User.create(data),
        updateUser: async (_: any , {id , data }: any) => await User.findOneAndUpdate(id , data),
        deleteUser: async (_: any , {id }: any ) => await User.deleteOne(id),
    },
};