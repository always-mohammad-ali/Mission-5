import { error } from "console";

export const dynamic = "force-dynamic"

export default async function AboutPage(){
    //for simulating loading
    await new Promise((resolve) => setTimeout(resolve, 4000));

    //for simulating error
   // throw new Error("Something went wrong");
    
    return(

        <div>
            <h1>this is about route
            </h1>
        </div>
    );
}