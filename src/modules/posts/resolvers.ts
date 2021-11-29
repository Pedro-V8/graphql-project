import User from '../../models/User';
import Posts from '../../models/Posts';

const addPosInUser = async(data: any) => {
    const user: any = await User.findById(data.user);
    await user.posts.push(data)
    // user.save()
    console.log(user.posts)
}
export default {
    Post: {
       user: async (post: any) => await User.findById(post.user),
    },
    Query: {
        posts: async () => await Posts.find(),
    },
    Mutation: {
        createPost: async (_:any ,  {data}:any)  => {
            const post =  await Posts.create(data);
            addPosInUser(post);
            return post;
        },
        deletePost: async (_:any ,  {id}: any)  => {
            await Posts.findByIdAndDelete(id);
            return true;
        },
    }
}