import User from '../../models/User';
import Post from '../../models/Posts';

export default {
    Post: {
        user: async (post: any) => await User.findById(post.user),
    },
    Query: {
        posts: async () => await Post.find(),
    },
    Mutation: {
        createPost: async (_:any ,  {data}:any)  => await Post.create(data),
        deletePost: async (_:any ,  {id}: any)  => {
            await Post.findByIdAndDelete(id);
            return true;
        },
    }
}