import React from "react";
import heroImage from "../assets/hero.jpg";
import Header from "./Header";
import mobilePhone from "../assets/sss-1.png";
import { Button ,Stack } from "@mui/material";
const Hero = () => {
  return (
    <div className=" relative min-h-screen w-full">
      <img
        src={heroImage}
        className="absolute w-full h-full bg-cover bg-center"
        alt="hero image"
      />
      <Header />
      <main className=" max-w-7xl px-10  ">
        <div className="absolute  text-white">
          <div className="flex gap-40 items-center justify-center  sm:flex-col lg:flex-row">
            <div className="max-w-md h-140">
              
                <img src={mobilePhone}
                className="h-full w-full"
                 alt="mobile phone" />
              
            </div>
            <div className="max-w-md">
              <h1 className="lg:text-4xl leading-12 ">
                We Created <br></br>
                <span className="font-bold">
                  Revolution in  Payment
                  </span>
                   </h1>
             <p className="leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Stack gap={2} direction={"row"}>
            <Button 
           sx={{backgroundColor:'#fcb900',
            borderRadius:'50px',
            paddingX:'4px'
           }}
           variant="contained">
            Hello
           </Button>
           <Button 
           sx={{backgroundColor:'#fcb900',
            borderRadius:'50px',
            paddingX:'4px'
           }}
           variant="contained">
            Hello
           </Button>
        </Stack>
           
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
