import { Divider } from "@mui/material";
import type { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};
const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="container group  hover:bg-amber-300 flex flex-col  items-center justify-center gap-6  relative max-w-80 lg:max-w-sm  h-75 py-7 px-6  rounded-2xl bg-black/60 text-white">
        <div 
       style={{transformStyle: 'preserve-3d'}}
        className="absolute z-70 shadow-md transform transition-transform duration-500 group-hover:rotate-y-180  left-1/2  -translate-x-1/2 bottom-0 top-0 -translate-y-20 flex items-center justify-center text-6xl h-35 w-35 bg-amber-300 rounded-full">
                {icon}
        </div>
      <div className="text-center flex flex-col items-center  space-y-4 pt-10">
        <h1 className="text-amber-300 group-hover:text-black font-bold text-2xl">{title}</h1>
        <div className="w-1/2 h-1 bg-white mb-4 transition-transform duration-300 group-hover:scale-x-130 origin-center"></div>
      
        <p className="text-gray-200  group-hover:text-black">{description}</p>
      </div>
    </div>
  );
};

export default Card;
