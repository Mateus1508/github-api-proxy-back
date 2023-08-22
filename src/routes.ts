import { Router } from "express";
import { UserController } from "./controller/userController";

export const router = Router();

const userController = new UserController();

router.get("/users", userController.getAllUsers);
router.get("/users/:username", userController.getUserDetailsByUsername);
router.get("/users/:username/repos", userController.getUserReposByUsername);