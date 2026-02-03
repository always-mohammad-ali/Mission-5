import { prisma } from "./lib/prisma";

async function run(){
   /* const createUser = await prisma.user.create({
        data :{
            name : "ali motherfucker",
            email : "ali@gmaill.com"
        }
    })
    console.log("created user : ", createUser);
   */

   /* const createPost = await prisma.post.create({
        data: {
            title : "justing b",
            content : "this is main content",
            authorId : 2
        }
    })

    console.log("created post", createPost);

    */

   /* 
    const createProfile = await prisma.profile.create({
        data : {
            bio : "hey its bio",
            userId : 1
        }
    })

    console.log("profile created", createProfile);

    */
    
    /*
    const getAllUsers = await prisma.user.findMany({
       /* include : {
            posts : true,
            profile : true
        }

       
        select : {
            id : true,
            name : true,
            email : true,
            posts : true,
            profile : true
        }
    })
    */


   // console.log("all users with post and profile : ", getAllUsers);
    // console.dir(getAllUsers, {depth : Infinity})

    /*

    const updateUser = await prisma.profile.update({
        where: {
           userId : 1
        },

        data : {
            bio : "its alis bio"
        },
        select : {
            id : true,
            bio : true,
            user : true
        }
    })

    console.log(updateUser);

    */

    const upsertUser = await prisma.user.upsert({
        where : {
            email : "mbapper@gmail.com",
        },

        update : {
            name : "vini vai"
        },
        create : {
            name : "mbappe",
            email : "mbapper@gmail.com"
        }


    })

    console.log(upsertUser);
}

run();