import React from "react";
import { PortableTextComponents } from "@portabletext/react";

export const components:PortableTextComponents={
    block:{
        h2:({Children}:any)=><h2 className="text-gray-700 my-4 font-[700] text-[2rem]">{Children}</h2>,
        h3:({Children}:any)=><h3 className="text-[1.4rem] text-gray-700 my-2 font-[700]">{Children}</h3>,
        
        h4:({Children}:any)=><h4 className="text-[1.1rem] text-gray-700 my-2 font-[700]">{Children}</h4>,
normal:()=><p className="text-[1.1rem] text-gray-700 leading-8 ">{}</p>

    
    },
    

}