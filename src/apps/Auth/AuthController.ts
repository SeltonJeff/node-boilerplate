import { Request, Response } from "express";
// import AuthServices from "./AuthServices";

export interface IAuthController {
  login: (req: Request, res: Response) => Promise<any>;
}

class AuthController implements IAuthController {
  async login(_: Request, res: Response) {
    // const result = await AuthServices.login(req.body);

    res
      .status(200)
      .json({ statusCode: 200, message: "You are authenticated!" });
  }
}

export default new AuthController();
