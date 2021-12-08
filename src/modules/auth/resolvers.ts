import { signIn } from "../../services/AuthenticateService";
import User from "../../models/User";

export default {
    Mutation: {
        authenticate: async (_: any , {data}: any) => {
            const response: any = await signIn(data.email)
            console.log(response); 
            return response;
        }
    }
}