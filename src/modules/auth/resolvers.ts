import { signIn , register } from "../../services/AuthenticateService";

export default {
    Mutation: {
        authenticate: async (_: any , { data }: any) => {
            const response: any = await signIn(data)

            return response;
        },
        registerUser: async(_: any , { data }: any) => {
            const usera: any = register(data);
            
            return usera;
        }
    }
}