import { fileLoader } from 'merge-graphql-schemas';
import path from 'path';

export const typeDefs = fileLoader(path.join(__dirname , '../modules' , '**', '*.gql'))
console.log(typeDefs)