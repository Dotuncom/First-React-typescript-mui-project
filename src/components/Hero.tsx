import React from "react";
import heroImage from "../assets/hero.jpg";
import Header from "./Header";
import mobilePhone from "../assets/sss-1.png";
import { Button, Stack } from "@mui/material";
const Hero = () => {
  return (
    <div className=" relative min-h-screen w-full">
      <img
        src={heroImage}
        className="absolute w-full h-full bg-cover bg-center"
        alt="hero image"
      />
      <Header />
      <main className=" max-w-7xl lg:px-10  ">
        <div className="absolute flex  lg:px-40 px-4 mt-20 lg:mt-0 text-white">
          <div className="flex  lg:gap-40 items-center justify-center flex-col-reverse lg:flex-row">
            <div className="lg:max-w-md h-140 pr-15 ">
              <img
                src={mobilePhone}
                className="h-full bg-no-repeat bg-contain bg-center w-full"
                alt="mobile phone"
              />
            </div>
            <div className="max-w-md">
              <div>
                <h1 className=" text-2xl lg:text-4xl text-center lg:text-left lg:leading-12 ">
                  We Created <br></br>
                  <span className="font-bold">Revolution in Payment</span>
                </h1>
                <p className="hidden md:block leading-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="hidden lg:block">
                  <Stack gap={2} direction={"row"}>
                    <Button
                      sx={{
                        backgroundColor: "#fcb900",
                        borderRadius: "50px",
                        paddingX: "4px",
                      }}
                      variant="contained"
                    >
                      Hello
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "#fcb900",
                        borderRadius: "50px",
                        paddingX: "4px",
                      }}
                      variant="contained"
                    >
                      Hello
                    </Button>
                  </Stack>
                </div>
              </div>
             
            </div>
            
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Hero;
