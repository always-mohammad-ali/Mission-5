import express, { Request, Response } from "express";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";

const app = express();

app.use(cors({
     origin : process.env.APP_URL || "http://localhost:4000",
     credentials : true
}))

app.all('/api/auth/{*splat}', toNodeHandler(auth));

app.use(express.json());

app.use("/posts", postRouter);

app.get("/", (req : Request, res : Response) =>{
    res.send("hello motherfucker world! how is going")
})

export default app;