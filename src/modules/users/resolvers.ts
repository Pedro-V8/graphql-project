import User from '../../models/User';

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_: any, {id}: any) => await User.findById(id),
    },
    Mutation: {
        createUser: async (_:any , {data}:any) => await User.create(data),
        updateUser: async (_: any , {id , data }: any) => await User.findOneAndUpdate(id , data),
        deleteUser: async (_: any , {id }: any ) => {
            await User.findOneAndDelete(id);
            return true;
        },
    },
};