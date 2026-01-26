
import Link from "next/link";

export default function PracticeLayout({children, marketingSlot, salesSlot} : 
    {children : React.ReactNode;
     marketingSlot : React.ReactNode;
     salesSlot : React.ReactNode}){
    return(
        <div className="size-400 border-3 border-red-400  p-10">
             <nav className="flex gap-10 m-8">
                <Link className="hover:underline" href="/development">Development</Link>
                <Link className="hover:underline" href="/testing">Testing</Link>
                <Link className="hover:underline" href="/marketing">Marketing</Link>
                <Link className="hover:underline" href="/marketing/settings">Setting</Link>
                <Link className="hover:underline" href="/sales">Sales</Link>
                
             </nav>
            
            <div className="flex gap-5 my-5">
               {marketingSlot}
               {salesSlot}
            </div>


            {children}
        </div>
    )
}