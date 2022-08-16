import { TLogin } from "../../@types";

export interface IAuthServices {
  login: (payload: TLogin) => Promise<any>;
}

class AuthServices implements IAuthServices {
  login(payload: TLogin): Promise<any> {
    console.log(payload);
    return Promise.resolve(true);
  }
}

export default new AuthServices();
