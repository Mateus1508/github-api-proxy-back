import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
    userService: UserService;

    constructor(
        userService = new UserService()
    ){
        this.userService = userService;
    }

    getAllUsers = async (req: Request,res: Response) => {
        try {
            const since = req.query.since as string;
            const users = await this.userService.getAllUsers(since);

            return res.status(200).json(users)
        }
        catch(err) {
            return err;
        }
    }
    
    getUserDetailsByUsername = async (req: Request,res: Response) => {
        try {
            const { username } = req.params;
            const users = await this.userService.getUserDetailsByUsername(username);

            return res.status(200).json(users)
        }
        catch(err) {
            return err;
        }
    }
    
    getUserReposByUsername = async (req: Request,res: Response) => {
        try {
            const { username } = req.params;
            const users = await this.userService.getUserReposByUsername(username);

            return res.status(200).json(users)
        }
        catch(err) {
            return err;
        }
    }
}