import { NextFunction, Request, Response } from "express";
import {auth as betterAuth} from "../lib/auth";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

declare global{
    namespace Express{
         interface Request{
            user?:{
                id: string;
                name: string;
                email: string;
                role: string;
                emailVerified: boolean
            }
         }
    }
}

export const auth = (...roles: UserRole[]) =>{
     return async(req : Request, res: Response, next: NextFunction) =>{
        //console.log(roles);
        //next();

        try{
          const session = await betterAuth.api.getSession({
            headers : req.headers as any
        })

        if(!session){
           return res.status(401).json({
                success: false,
                message : "you are not authorized"
            })
        }

        if(!session.user.emailVerified){
            return res.status(403).json({
                success : false,
                message : "please verify your email first"
            })
        }

        req.user = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            role: session.user.role as string,
            emailVerified: session.user.emailVerified
        }

        if(roles.length && !roles.includes(req.user.role as UserRole)){
            return res.status(403).json({
                success : false,
                message : "Forbidden, you don't have permission to this resources"
            })
        }

        console.log(session);

        next();
        }catch(err){
            next(err)
        }
    }
}