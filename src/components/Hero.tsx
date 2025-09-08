import heroImage from "../assets/hero.jpg";
import Header from "../components/Header";
import mobilePhone from "../assets/sss-1.png";
import { Button, Stack } from "@mui/material";
const Hero = () => {
  return (
    <div className=" relative min-h-screen md:min-h-200 lg:min-h-screen w-full">
      <img
        src={heroImage}
        className="absolute w-full h-full bg-cover bg-center"
        alt="hero image"
      />
      <Header />
      <main className=" max-w-7xl md:px-10  ">
        <div className="absolute flex  lg:px-40 px-4 mt-20 md:mt-0 text-white">
          <div className="transition-all duration-300 ease-in-out flex  lg:gap-40 items-center justify-center flex-col-reverse md:flex-row">
            <div className="lg:max-w-md h-140 pr-15 ">
              <img
                src={mobilePhone}
                className="h-full bg-no-repeat bg-contain bg-center w-full"
                alt="mobile phone"
              />
            </div>
            <div className="max-w-md">
              <div>
                <h1 className=" text-2xl md:text-4xl text-center md:text-left md:leading-12 ">
                  We Created <br></br>
                  <span className="font-bold">Revolution in Payment</span>
                </h1>
                <p className="hidden md:block leading-9 transition-transform duration-300 ease-in-out ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="hidden md:block">
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
