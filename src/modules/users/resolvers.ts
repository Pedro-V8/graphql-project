import User from '../../models/User';
import Post from '../../models/Posts';
function deletaPost(arr: any){
    arr.forEach((e: any) => {
        async () => await Post.deleteOne(e)
    });
}
let mArr: Array<any> = [];
let post: any;
const teste = async (id: any) => {
    await Post.findOne(id).then(async(ps) => await mArr.push(ps)) 
    //console.log(mArr)
}
function retornaPosts(arr: any){
    arr.map((el: any) => { 
        teste(el) 
        //console.log((el))
    })
}

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_: any, {id}: any) =>{
            const user =  await User.findById(id).populate('posts');
            // retornaPosts(user.posts);
            // user.posts.push(mArr);
            // console.log(user.posts);

            return user;
        },
    },
    Mutation: {
        createUser: async (_:any , {data}:any) => await User.create(data),
        updateUser: async (_: any , {id , data }: any) => await User.findOneAndUpdate(id , data),
        deleteUser: async (_: any , {id }: any ) => await User.deleteOne(id),
    },
};