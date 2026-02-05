import { NextFunction, Request, Response, Router } from "express";
import { postController } from "./post.controller";

import { success } from "better-auth";
import {auth, UserRole } from "../../middleware/auth";


const router = Router();

router.get("/", postController.getAllPost)

router.post("/", auth(UserRole.USER), postController.createPost);

export const postRouter : Router = router ;
