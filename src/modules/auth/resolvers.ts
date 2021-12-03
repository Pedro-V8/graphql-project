import { signIn } from "../../services/AuthenticateService";
import User from "../../models/User";

export default {
    Mutation: {
        authenticate: async (_: any , {data}: any) => {
            const user: any = await signIn(data.email)
            console.log(user)
            //console.log(user)
            return user;
        }
    }
}