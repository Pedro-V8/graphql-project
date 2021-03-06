import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

const typesArr = loadFilesSync(path.join(__dirname , '../modules' , '**', '*.gql'));
export const typeDefs = mergeTypeDefs(typesArr);
