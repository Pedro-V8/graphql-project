import { signIn } from "../../services/AuthenticateService";

export default {
    Mutation: {
        authenticate: async (_: any , {data}: any) => {
            const response: any = await signIn(data)

            return response;
        }
    }
}