import { error } from "console";


export default async function AboutPage(){
    await new Promise((resolve) => setTimeout(resolve, 4000));

    throw new Error("Something went wrong");
    
    return(

        <div>
            <h1>this is about route
            </h1>
        </div>
    );
}