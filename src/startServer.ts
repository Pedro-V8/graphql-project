import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

export const startServer = (typeDefs: any, resolvers: any) => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://deploy:YkccvlGFoRTgg7gF@cluster0.uekop.mongodb.net/test');
    const server = new ApolloServer({ typeDefs , resolvers});
    server.listen().then(({ url }: any) => console.log(`Server Listen on port ${url}`));
}