import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import path from 'path';

const resolversArr = loadFilesSync(path.join(__dirname , '../modules' , '**', 'resolvers.ts'));
export const resolvers = mergeResolvers(resolversArr);