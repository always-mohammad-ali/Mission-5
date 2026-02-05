import { Request, Response } from "express"
import { postService } from "./post.service"



const createPost = async (req : Request, res : Response) => {
    try {
      console.log(req.user);
      const user = req.user;
      if(!user){
       return res.status(400).json({
           error : "unauthorized"
        })
      }
      const result = await postService.createPost(req.body, user.id as string);
      res.status(201).json({
        success : true,
        data : result
      })
    }catch(error){
        res.status(400).json({
            success : false,
            message : "error"
        })
    }
}


const getAllPost = async(req: Request, res: Response) =>{
    try{

      const { search } = req.query
      //console.log(search);
      
      const searchString = typeof search === 'string' ? search : undefined ;

      const result = await postService.getAllPost({search : searchString});
      res.status(201).json({
        success : true, 
        message: "yeah we have gotten everything",
        data: result
      })

    }catch(error){
        res.status(400).json({
            success : false,
            message : "error"
    })
}

}

export const postController = {
    createPost,
    getAllPost
}
